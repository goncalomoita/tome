---
"@tomehq/cli": patch
"@tomehq/core": patch
"@tomehq/theme": patch
"@tomehq/components": patch
---

Fix MCP server stdout corruption, add dashboard mobile responsiveness, improve test coverage, and update docs.

- Fix: MCP CLI banner no longer writes to stdout, preventing JSON-RPC protocol corruption
- Fix: API Playground prop wiring and githubSource route crash
- Feat: MCP server `createMcpServer()` exported for programmatic use with graceful shutdown
- Feat: Dashboard mobile-responsive layout with media query breakpoints
- Feat: 13 MCP server integration tests using InMemoryTransport
- Docs: Add missing typedoc CLI command, fix social link examples, update package list
