---
"@tomehq/cli": patch
"@tomehq/core": patch
"@tomehq/theme": patch
"@tomehq/components": patch
---

fix: normalize backslash paths for Windows compatibility

On Windows, glob returns backslash-separated file paths which caused route matching to fail, rendering blank pages for any subpage. All route discovery paths (default, i18n, versioned) now normalize backslashes to forward slashes.
