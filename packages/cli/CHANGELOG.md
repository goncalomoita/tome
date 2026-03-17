# @tomehq/cli

## 0.4.0

### Minor Changes

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

### Patch Changes

- Updated dependencies [c4eae3b]
  - @tomehq/core@0.3.4

## 0.3.3

### Patch Changes

- 062349c: Fix MCP server stdout corruption, add dashboard mobile responsiveness, improve test coverage, and update docs.

  - Fix: MCP CLI banner no longer writes to stdout, preventing JSON-RPC protocol corruption
  - Fix: API Playground prop wiring and githubSource route crash
  - Feat: MCP server `createMcpServer()` exported for programmatic use with graceful shutdown
  - Feat: Dashboard mobile-responsive layout with media query breakpoints
  - Feat: 13 MCP server integration tests using InMemoryTransport
  - Docs: Add missing typedoc CLI command, fix social link examples, update package list

- Updated dependencies [062349c]
  - @tomehq/core@0.3.3

## 0.2.8

### Minor Changes

- `tome init` now scaffolds GitHub Actions deploy workflow (`.github/workflows/deploy.yml`)
- `tome migrate:gitbook` command for converting GitBook projects
- `tome migrate:mintlify` command for converting Mintlify projects
- Cleaner Pagefind output: suppress noisy logs, show summary only
- Updated Node.js requirement to 20+
- Updated dependencies
  - @tomehq/core@0.2.8

## 0.2.0

### Minor Changes

- Add `tome lint` command with paragraph length, heading hierarchy, image alt, empty link, and banned words checks
- Add `tome deploy --preview` for preview deployments with optional `--branch` and `--expires` flags
- Updated dependencies
  - @tomehq/core@0.2.0

## 0.1.1

### Patch Changes

- Updated dependencies
  - @tomehq/core@0.1.1
