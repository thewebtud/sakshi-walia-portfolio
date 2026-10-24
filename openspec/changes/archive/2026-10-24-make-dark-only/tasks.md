# Tasks

## 1. Tokens and document head

- [x] 1.1 In `src/styles/tokens.css`, move the dark token values onto `:root` with `color-scheme: dark`; delete the light values, the `:root[data-theme='dark']` block and the `prefers-color-scheme` block; verify the page looks identical to today's dark theme
- [x] 1.2 In `index.html`, remove the inline theme script and the two media-keyed `theme-color` metas; add one `<meta name="theme-color" content="#101216" />` matching the dark `--bg`
- [x] 1.3 In `src/styles/base.css`, remove the `:root[data-theme-transition]` rule

## 2. Remove toggle and theme logic

- [x] 2.1 Remove the theme toggle button and `useTheme` import from `Navbar.jsx`; keep the mobile menu toggle, Resume action, scroll-spy and Escape-to-close behaviour (`.navbar__icon-btn` styles are still used by the menu toggle)
- [x] 2.2 Delete `src/hooks/useTheme.js`; remove `SunIcon` and `MoonIcon` from `Icons.jsx`
- [x] 2.3 Add a best-effort, `try/catch`-guarded `localStorage.removeItem('theme')` on startup in `src/main.jsx`
- [x] 2.4 Search the repo for leftover references (`data-theme`, `useTheme`, `SunIcon`, `MoonIcon`, `prefers-color-scheme`, `toggleTheme`) and remove them

## 3. Colour audit (dark only)

- [x] 3.1 Review `Hero.css` accents (`--blob-*`, `--grid-line`) and `--bg-alt` section banding; confirm sections remain distinguishable
- [x] 3.2 Review `Contact.css` and `CaseStudyDialog.css`; confirm the Contact band and dialog backdrop/surface are legible and distinct from adjacent surfaces (added a `--border` outline to the Contact card, whose fill is nearly identical to the page background)
- [x] 3.3 Re-verify AA contrast for all text/background token pairs and focus rings; adjust only failing values (all pairs ≥ 6.49:1, focus 8.97:1; no changes needed)

## 4. Docs

- [x] 4.1 Update `README.md` accessibility line to state the site uses a dark theme only

## 5. Verification

- [x] 5.1 Run `npm run lint` and `npm run build`; both pass
- [x] 5.2 With the OS set to light and a stale `localStorage.theme = 'light'`, reload and confirm the page renders dark and the stale key is removed
- [x] 5.3 Responsive check at 360, 768 and 1280 px: no horizontal overflow at any width and the navbar renders without the toggle
- [ ] 5.4 Accessibility check: keyboard-only walkthrough, visible focus rings, reduced-motion behaviour unchanged
