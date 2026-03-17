---
"@tome/theme": minor
"@tome/core": patch
"@tome/cli": minor
---

Fix client-side navigation race conditions, content flash, and feedback section disappearing

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
