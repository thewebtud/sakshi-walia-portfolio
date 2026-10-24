# Proposal

## Why

The portfolio already ships light and dark colour tokens, but the theme is chosen only by the visitor's operating-system setting (`prefers-color-scheme`). A recruiter on a bright-screen laptop with a dark OS, or on a dim phone with a light OS, cannot change it from the page. A visible light/dark toggle gives visitors control over readability and comfort, and signals polish and attention to accessibility.

## What Changes

- Add a theme toggle button to the navbar (visible on desktop and inside/next to the mobile menu toggle) that switches between light and dark.
- Introduce a `data-theme="light|dark"` attribute on `<html>` that overrides the OS preference; with no stored choice the site continues to follow `prefers-color-scheme`.
- Persist the visitor's explicit choice in `localStorage` and restore it on the next visit.
- Apply the stored theme before first paint (small inline script in `index.html`) so there is no flash of the wrong theme.
- Refactor `src/styles/tokens.css` so each theme's tokens are defined once (keyed by `data-theme`) instead of duplicated inside a media query.
- Keep `<meta name="theme-color">` and `color-scheme` in sync with the active theme.
- Add a sun/moon icon pair to `Icons.jsx` and a `useTheme` hook.
- Smooth, short colour transition on switch that is disabled under `prefers-reduced-motion`.
- Review the hard-coded colours in `Contact.css` (always-dark section) and `CaseStudyDialog.css` so they remain legible and intentional in both themes.

Out of scope: additional themes or accent colour pickers, a three-state "system / light / dark" menu, syncing the preference across devices, server-side persistence, changes to copy or resume-sourced content, and re-theming the OG image.

## Impact

- **Visitors**: can pick the theme that suits their environment; the choice is remembered.
- **Affected specs**: new capability `theme-toggle`. It adds to the navigation bar defined in `portfolio-shell` (from `add-interactive-portfolio-spa`, not yet archived); that spec is not modified here because a delta against it cannot be archived until the first change lands.
- **Affected code**: `index.html`, `src/styles/tokens.css`, `src/components/Navbar.jsx` / `Navbar.css`, `src/components/ui/Icons.jsx`, new `src/hooks/useTheme.js`, plus a colour audit of `Contact.css` and `CaseStudyDialog.css`.
- **Dependencies**: none added.
- **Note**: "subset" in the request was interpreted as "site" (the whole portfolio).
- **Performance**: negligible (one tiny inline script, one small hook); no layout shift.
- **Content dependency**: none; no information is needed from Sakshi.
