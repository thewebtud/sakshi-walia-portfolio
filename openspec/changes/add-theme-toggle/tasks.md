# Tasks

## 1. Theme tokens and pre-paint script

- [x] 1.1 Refactor `src/styles/tokens.css` so light and dark tokens are keyed by `:root[data-theme]` with a `prefers-color-scheme` fallback when no `data-theme` is set; set `color-scheme` per theme; verify the page looks identical to today under each OS setting with no stored choice
- [x] 1.2 Add a blocking inline script in `index.html` that reads `localStorage.theme`, validates it (`light` | `dark`), sets `data-theme` on `<html>`, and swallows storage errors; verify no flash of the wrong theme on hard reload with a stored choice that differs from the OS setting
- [x] 1.3 Keep the media-keyed `theme-color` metas as the fallback; verify they still resolve correctly without JavaScript

## 2. Theme logic

- [x] 2.1 Create `src/hooks/useTheme.js` exposing the effective theme and a `toggle` function; resolve from stored value else `matchMedia('(prefers-color-scheme: dark)')`; follow OS changes only while no explicit choice exists; guard all storage access with `try/catch`; verify behaviour with storage blocked and with an invalid stored value
- [x] 2.2 Update the `theme-color` meta (and `data-theme`) when the theme changes; verify in devtools that the value matches the active theme

## 3. Toggle UI

- [x] 3.1 Add `SunIcon` and `MoonIcon` to `src/components/ui/Icons.jsx`
- [x] 3.2 Add the toggle button to `Navbar.jsx` / `Navbar.css`, placed so it is visible on mobile and desktop, with an accessible name/state, `:focus-visible` ring, and at least 44×44 px target; verify keyboard operation (Enter/Space) keeps focus on the button
- [x] 3.3 Add a short colour transition applied only during a switch and disabled under `prefers-reduced-motion`; verify no hover/scroll jank and instant change with reduced motion enabled

## 4. Colour audit

- [x] 4.1 Review `Contact.css` hard-coded colours; keep it as an intentional dark band in both themes, move values to named tokens where practical, and verify AA contrast
- [x] 4.2 Review `CaseStudyDialog.css` backdrop/surface and Hero background accents (`--blob-*`, `--grid-line`) in both themes; fix any legibility issues
- [x] 4.3 Re-verify AA contrast for all text/background token pairs in both themes with a contrast checker

## 5. Verification

- [x] 5.1 Run `npm run lint` and `npm run build`; both must pass
- [x] 5.2 Responsive check at 360, 768, and 1280 px in both themes: navbar has no overlap/overflow, all sections and the case-study dialog are legible
- [ ] 5.3 Accessibility check: keyboard-only walkthrough, screen reader name/state announcement, visible focus in both themes, reduced-motion behaviour
- [x] 5.4 Persistence check: choose a theme, reload, revisit in a new tab; confirm it is restored and that clearing storage returns to the OS preference
