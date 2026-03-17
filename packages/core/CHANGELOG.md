# @tomehq/core

## 0.3.4

### Patch Changes

- c4eae3b: Fix client-side navigation race conditions, content flash, and feedback section disappearing

  **Theme:**

  - Replace AbortController with navigation counter pattern for reliable race condition protection during rapid sidebar navigation
  - Switch content innerHTML update from `useEffect` to `useLayoutEffect` to prevent visual flash artifacts (thumbs up/down flicker)
  - Add `key={currentPageId}` on content div to force DOM recreation on page change
  - Change `overflow: hidden` to `overflow: clip` on root container to prevent feedback section from disappearing on scroll
  - Move `setCurrentPageId` after page load completes (load-before-push) so sidebar highlighting stays correct during navigation
  - Remove stale HTML comparison guard that prevented content updates during rapid navigation
  - Add error classes (PageNotFoundError, PageLoadError, NavigationCancelledError) for better error handling

  **Core:**

  - Page loader virtual module now throws `Error("Unknown page: " + id)` for unknown page IDs instead of silently returning null

  **CLI:**

  - Restructure `tome init` scaffolding to use Diataxis framework (tutorials, guides, reference, concepts)
  - Add comprehensive starter pages for each Diataxis category
  - Add create-tome template with same Diataxis structure

## 0.3.3

### Patch Changes

- 062349c: Fix MCP server stdout corruption, add dashboard mobile responsiveness, improve test coverage, and update docs.

  - Fix: MCP CLI banner no longer writes to stdout, preventing JSON-RPC protocol corruption
  - Fix: API Playground prop wiring and githubSource route crash
  - Feat: MCP server `createMcpServer()` exported for programmatic use with graceful shutdown
  - Feat: Dashboard mobile-responsive layout with media query breakpoints
  - Feat: 13 MCP server integration tests using InMemoryTransport
  - Docs: Add missing typedoc CLI command, fix social link examples, update package list

## 0.2.8

### Minor Changes

- Per-page HTML shell generation in vite-plugin for Pagefind indexing and static host support
- Redirect support: config-level `redirects` array, frontmatter `redirect_from`, `_redirects` file emission
- MDX sandbox (`recma-sandbox`): compile-time blocking of dangerous JS patterns in MDX content
- CSP meta tag injection when sandbox is enabled
- Redirect middleware in dev server for frontmatter and config redirects
- GitBook migration converter (`migrate-gitbook`)
- Mintlify migration converter (`migrate-mintlify`)
- `RedirectSchema` and `SandboxSchema` added to config
- Hex HTML entity decoding in code block highlighter
- `redirect_from` frontmatter field support in markdown pipeline

## 0.2.0

### Minor Changes

- Add 7 new modules: linter, og-image, preview, webhooks, changelog, git-dates, link-checker
- Extend vite-plugin with editLink, tableOfContents, and plugin system support
- Add `__TOME_VERSION__` build-time define
- Add webhook, editLink, tableOfContents, and plugins config schemas
- Extend markdown pipeline with `lastUpdated` and `createdAt` git-based dates

## 0.1.1

### Patch Changes

- Fix bugs found in functionality audit: invalid search provider, AI key naming mismatch, hardcoded version. Remove dead billing stubs. Add 57 API route tests.
