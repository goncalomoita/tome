import { describe, it, expect, vi } from "vitest";
import { Hono } from "hono";
import type { Env, User } from "../types.js";
import { billing } from "./billing.js";

// Mock Stripe module
vi.mock("stripe", () => {
  return {
    default: vi.fn().mockImplementation(function () {
      return {
        prices: {
          search: vi.fn().mockResolvedValue({ data: [{ id: "price_test" }] }),
          retrieve: vi.fn().mockResolvedValue({ id: "price_test", product: "prod_test" }),
          create: vi.fn().mockResolvedValue({ id: "price_new" }),
        },
        products: {
          search: vi.fn().mockResolvedValue({ data: [] }),
          create: vi.fn().mockResolvedValue({ id: "prod_new" }),
        },
        customers: {
          create: vi.fn().mockResolvedValue({ id: "cus_new" }),
        },
        checkout: {
          sessions: {
            create: vi.fn().mockResolvedValue({ url: "https://checkout.stripe.com/test", id: "cs_test" }),
          },
        },
        billingPortal: {
          sessions: {
            create: vi.fn().mockResolvedValue({ url: "https://billing.stripe.com/portal" }),
          },
          configurations: {
            create: vi.fn().mockResolvedValue({ id: "bpc_test" }),
          },
        },
        webhookEndpoints: {
          list: vi.fn().mockResolvedValue({ data: [] }),
          create: vi.fn().mockResolvedValue({ id: "we_test", secret: "whsec_test" }),
        },
      };
    }),
  };
});

const testUser: User = {
  id: "u1",
  email: "test@example.com",
  name: "Test",
  avatar_url: null,
  api_token: "tome_abc",
  stripe_customer_id: null,
  plan: "community",
  created_at: "2025-01-01",
  updated_at: "2025-01-01",
};

const paidUser: User = {
  ...testUser,
  plan: "cloud",
  stripe_customer_id: "cus_existing",
};

function mockDb() {
  return {
    prepare: vi.fn().mockReturnValue({
      bind: vi.fn().mockReturnValue({
        run: vi.fn().mockResolvedValue({ success: true }),
        first: vi.fn().mockResolvedValue(null),
      }),
    }),
  } as unknown as D1Database;
}

function makeApp(user: User) {
  const app = new Hono<{ Bindings: Env; Variables: { user: User } }>();
  app.use("*", async (c, next) => {
    c.set("user", user);
    await next();
  });
  app.route("/", billing);
  return app;
}

function makeEnv() {
  return {
    TOME_DB: mockDb(),
    STRIPE_SECRET_KEY: "sk_test_fake",
  } as Env;
}

describe("billing routes", () => {
  describe("POST /checkout", () => {
    it("creates checkout session for valid plan", async () => {
      const app = makeApp(testUser);
      const env = makeEnv();
      const res = await app.request("/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          planId: "cloud",
          successUrl: "https://example.com/success",
          cancelUrl: "https://example.com/cancel",
        }),
      }, env);
      expect(res.status).toBe(200);
      const body = await res.json() as any;
      expect(body.url).toContain("checkout.stripe.com");
      expect(body.sessionId).toBeTruthy();
    });

    it("rejects unknown plan with 400", async () => {
      const app = makeApp(testUser);
      const env = makeEnv();
      const res = await app.request("/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          planId: "enterprise",
          successUrl: "https://example.com/success",
          cancelUrl: "https://example.com/cancel",
        }),
      }, env);
      expect(res.status).toBe(400);
      const body = await res.json() as any;
      expect(body.error).toContain("Unknown plan");
    });

    it("rejects upgrading to same plan with 400", async () => {
      const app = makeApp(paidUser);
      const env = makeEnv();
      const res = await app.request("/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          planId: "cloud",
          successUrl: "https://example.com/success",
          cancelUrl: "https://example.com/cancel",
        }),
      }, env);
      expect(res.status).toBe(400);
      const body = await res.json() as any;
      expect(body.error).toContain("already on this plan");
    });
  });

  describe("POST /portal", () => {
    it("returns portal URL for paying customer", async () => {
      const app = makeApp(paidUser);
      const env = makeEnv();
      const res = await app.request("/portal", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ returnUrl: "https://example.com/billing" }),
      }, env);
      expect(res.status).toBe(200);
      const body = await res.json() as any;
      expect(body.url).toContain("billing.stripe.com");
    });

    it("rejects user without billing account", async () => {
      const app = makeApp(testUser); // no stripe_customer_id
      const env = makeEnv();
      const res = await app.request("/portal", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ returnUrl: "https://example.com/billing" }),
      }, env);
      expect(res.status).toBe(400);
      const body = await res.json() as any;
      expect(body.error).toContain("No billing account");
    });
  });

  describe("POST /setup", () => {
    it("creates Stripe products, prices, webhook, and portal", async () => {
      const app = makeApp(testUser);
      const env = makeEnv();
      const res = await app.request("/setup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({}),
      }, env);
      expect(res.status).toBe(200);
      const body = await res.json() as any;
      expect(body.products).toBeTruthy();
      expect(body.webhook).toBeTruthy();
      expect(body.portalConfigured).toBe(true);
    });
  });
});
