# Design

## Context

`tokens.css` defines light tokens on `:root`, dark tokens under `:root[data-theme='dark']`, and the same dark tokens again inside `@media (prefers-color-scheme: dark)`. `useTheme` reads/writes `localStorage.theme` and `data-theme` on `<html>`; `index.html` has an inline pre-paint script and two media-keyed `theme-color` metas; `Navbar` renders the toggle with `SunIcon`/`MoonIcon`; `base.css` has a transition rule for theme switches.

## Decisions

### 1. Dark tokens move to `:root`; light tokens are deleted
The existing dark values are kept verbatim so the dark look does not change. `color-scheme: dark` is set on `:root` so scrollbars and native controls render dark.

**Alternative rejected:** keeping `data-theme='dark'` hard-coded on `<html>` and leaving the token structure. This leaves dead light code and an attribute nothing needs.

### 2. No runtime theme logic
The `useTheme` hook, `data-theme`, the `data-theme-transition` rule and the pre-paint script are all removed. Dark is the static default in CSS, so there is no flash-of-wrong-theme risk and no JavaScript dependency.

### 3. Single `theme-color` meta
Replace the two media-keyed metas with one meta using the dark `--bg` value (`#101216`).

### 4. Stale storage cleanup
Previously stored `theme` values are ignored (nothing reads them). A one-time best-effort `localStorage.removeItem('theme')` in `main.jsx`, wrapped in `try/catch`, removes the orphaned key. It can be dropped later with no behavioural effect.

### 5. Re-audit tokens tuned for two themes
Some tokens (`--bg-alt`, `--blob-*`, `--grid-line`, Contact band colours, dialog backdrop) were balanced against a light counterpart. With only dark remaining, verify that section banding, the Contact band and the dialog backdrop are still visually distinct and that all text/background pairs meet AA contrast. Adjust only where a check fails.

## Risks / Trade-offs

- Visitors who need a light theme for readability lose that option. Accepted by the owner; reader modes and OS forced-colours still work.
- Printing: dark backgrounds may print poorly. Not previously handled; out of scope unless a print stylesheet already exists.
- Archiving order: `add-theme-toggle` is already archived, so this change removes its `theme-toggle` requirements via a `REMOVED` delta.
