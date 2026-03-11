import { describe, it, expect, vi } from "vitest";
import { Hono } from "hono";
import type { Env } from "../types.js";
import { webhooks } from "./webhooks.js";

// Track DB calls
const dbRunMock = vi.fn().mockResolvedValue({ success: true });

function mockDb() {
  return {
    prepare: vi.fn().mockReturnValue({
      bind: vi.fn().mockReturnValue({
        run: dbRunMock,
        first: vi.fn().mockResolvedValue(null),
      }),
    }),
  } as unknown as D1Database;
}

// Mock Stripe with controllable constructEvent
const mockConstructEvent = vi.fn();
const mockSubscriptionsRetrieve = vi.fn();
const mockPricesRetrieve = vi.fn();

vi.mock("stripe", () => {
  return {
    default: vi.fn().mockImplementation(function () {
      return {
        webhooks: {
          constructEvent: mockConstructEvent,
        },
        subscriptions: {
          retrieve: mockSubscriptionsRetrieve,
        },
        prices: {
          retrieve: mockPricesRetrieve,
        },
      };
    }),
  };
});

function makeApp() {
  const app = new Hono<{ Bindings: Env }>();
  app.route("/", webhooks);
  return app;
}

function makeEnv() {
  return {
    TOME_DB: mockDb(),
    STRIPE_SECRET_KEY: "sk_test_fake",
    STRIPE_WEBHOOK_SECRET: "whsec_test",
  } as Env;
}

describe("webhook routes", () => {
  describe("POST /stripe", () => {
    it("rejects missing Stripe-Signature header", async () => {
      const app = makeApp();
      const env = makeEnv();
      const res = await app.request("/stripe", {
        method: "POST",
        body: "{}",
      }, env);
      expect(res.status).toBe(400);
      const body = await res.json() as any;
      expect(body.error).toContain("Missing Stripe-Signature");
    });

    it("rejects invalid webhook signature", async () => {
      mockConstructEvent.mockImplementationOnce(() => {
        throw new Error("Invalid signature");
      });

      const app = makeApp();
      const env = makeEnv();
      const res = await app.request("/stripe", {
        method: "POST",
        headers: { "Stripe-Signature": "invalid_sig" },
        body: "{}",
      }, env);
      expect(res.status).toBe(400);
      const body = await res.json() as any;
      expect(body.error).toContain("Invalid webhook signature");
    });

    it("handles checkout.session.completed", async () => {
      dbRunMock.mockClear();

      mockConstructEvent.mockReturnValueOnce({
        type: "checkout.session.completed",
        data: {
          object: {
            customer: "cus_123",
            subscription: "sub_123",
            customer_email: "user@test.com",
          },
        },
      });

      mockSubscriptionsRetrieve.mockResolvedValueOnce({
        items: { data: [{ price: { id: "price_cloud" } }] },
        metadata: { tome_plan: "cloud" },
        status: "active",
      });

      mockPricesRetrieve.mockResolvedValueOnce({
        metadata: { tome_plan: "cloud" },
      });

      const app = makeApp();
      const env = makeEnv();
      const res = await app.request("/stripe", {
        method: "POST",
        headers: { "Stripe-Signature": "valid_sig" },
        body: JSON.stringify({}),
      }, env);

      expect(res.status).toBe(200);
      const body = await res.json() as any;
      expect(body.type).toBe("checkout.session.completed");
      expect(body.handled).toBe(true);
    });

    it("handles customer.subscription.deleted by reverting to community", async () => {
      dbRunMock.mockClear();

      mockConstructEvent.mockReturnValueOnce({
        type: "customer.subscription.deleted",
        data: {
          object: {
            customer: "cus_123",
          },
        },
      });

      const app = makeApp();
      const env = makeEnv();
      const res = await app.request("/stripe", {
        method: "POST",
        headers: { "Stripe-Signature": "valid_sig" },
        body: JSON.stringify({}),
      }, env);

      expect(res.status).toBe(200);
      const body = await res.json() as any;
      expect(body.type).toBe("customer.subscription.deleted");
      expect(body.handled).toBe(true);
      // DB should have been updated to community plan
      expect(dbRunMock).toHaveBeenCalled();
    });

    it("handles customer.subscription.updated", async () => {
      mockConstructEvent.mockReturnValueOnce({
        type: "customer.subscription.updated",
        data: {
          object: {
            customer: "cus_123",
            items: { data: [{ price: { id: "price_team" } }] },
            metadata: { tome_plan: "team" },
            status: "active",
          },
        },
      });

      mockPricesRetrieve.mockResolvedValueOnce({
        metadata: { tome_plan: "team" },
      });

      const app = makeApp();
      const env = makeEnv();
      const res = await app.request("/stripe", {
        method: "POST",
        headers: { "Stripe-Signature": "valid_sig" },
        body: JSON.stringify({}),
      }, env);

      expect(res.status).toBe(200);
      const body = await res.json() as any;
      expect(body.type).toBe("customer.subscription.updated");
    });

    it("reverts to community when subscription status is not active", async () => {
      mockConstructEvent.mockReturnValueOnce({
        type: "customer.subscription.updated",
        data: {
          object: {
            customer: "cus_123",
            items: { data: [{ price: { id: "price_cloud" } }] },
            metadata: { tome_plan: "cloud" },
            status: "canceled", // not active or trialing
          },
        },
      });

      mockPricesRetrieve.mockResolvedValueOnce({
        metadata: { tome_plan: "cloud" },
      });

      const app = makeApp();
      const env = makeEnv();
      const res = await app.request("/stripe", {
        method: "POST",
        headers: { "Stripe-Signature": "valid_sig" },
        body: JSON.stringify({}),
      }, env);

      expect(res.status).toBe(200);
    });
  });
});
