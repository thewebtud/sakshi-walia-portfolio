# Design

## Context

`tokens.css` defines light tokens on `:root` and re-declares the dark tokens inside `@media (prefers-color-scheme: dark)`. `index.html` has two `theme-color` metas keyed by the same media query. Components consume only CSS custom properties, except `Contact.css` (an intentionally dark section with hard-coded hex values) and the backdrop in `CaseStudyDialog.css`.

## Decisions

### 1. Theme state lives in a `data-theme` attribute on `<html>`
CSS selects on `:root[data-theme='dark']` / `:root[data-theme='light']`. No React context is needed for styling; the `useTheme` hook only reads/writes the attribute and storage.

**Alternative rejected:** CSS classes or a context provider re-rendering the tree; heavier and unnecessary since all styling is token-driven.

### 2. Two-state toggle, default follows the OS
- No stored value → no `data-theme` override is applied; tokens fall back to `prefers-color-scheme`. The hook resolves the effective theme from `matchMedia` for the button's label/icon.
- First click sets the opposite of the effective theme and stores it (`localStorage` key `theme`, values `light` | `dark`).
- While no explicit choice is stored, OS theme changes are followed live; once the visitor chooses, the stored value wins.

**Alternative rejected:** three-state system/light/dark control; more UI than a portfolio needs. Can be added later without changing the storage format.

### 3. Token structure
Plain CSS cannot share one declaration block between a selector and a media query, so the dark block is declared twice with identical values (`:root[data-theme='dark']` and `:root:not([data-theme='light'])` inside `@media (prefers-color-scheme: dark)`), with a comment marking them as a pair. This is acceptable for ~20 tokens and avoids adding a preprocessor.

```css
:root { /* light tokens */ }
:root[data-theme='dark'] { /* dark tokens */ }
@media (prefers-color-scheme: dark) {
  :root:not([data-theme='light']) { /* same dark tokens */ }
}
```

`color-scheme` is set per theme (`light` / `dark`) so native controls and scrollbars match.

### 4. No flash of wrong theme
A small blocking inline script in `<head>` reads `localStorage` and sets `data-theme` before first paint. It is wrapped in `try/catch` so blocked storage (private mode, strict settings) silently falls back to the OS preference. This is the one justified deviation from "no inline scripts"; no CSP is currently configured.

### 5. `theme-color` meta
The two media-keyed metas stay as the no-JS/default fallback. When the active theme differs from the OS preference, the hook updates a single unkeyed `theme-color` meta so browser chrome matches the page.

### 6. Placement and control
A single `<button type="button">` in the navbar, next to the Resume button on desktop and next to the menu toggle on mobile (always visible, not hidden in the collapsed menu). It uses a dynamic `aria-label` describing the action ("Switch to dark theme" / "Switch to light theme") and no `aria-pressed`, to avoid conflicting name/state announcements. Minimum 44×44 px hit target, visible `:focus-visible` ring using `--focus`. Icon is decorative (`aria-hidden`).

### 7. Transition
Colour changes animate over `--dur-base` via a temporary `data-theme-transition` flag on `<html>` set only while switching, so ordinary hover/scroll performance is untouched. Skipped entirely under `prefers-reduced-motion`.

### 8. Always-dark sections
Contact keeps its dark look as a deliberate contrast band in both themes. Its hard-coded values are checked for AA contrast and, where practical, moved onto dedicated tokens so the intent is explicit. The case-study dialog backdrop is a neutral scrim that works in both themes; the dialog surface already uses tokens.

## Risks / Trade-offs

- **Inline script vs. purity:** accepted to avoid theme flash; failure mode is benign.
- **Hero background blobs / grid lines** use theme-specific tokens (`--blob-*`, `--grid-line`); verify both themes visually.
- **Stored value tampering:** values are validated against the allowed set; anything else is ignored.
- **Accessibility:** both themes must keep AA contrast (already verified for tokens in the original change; re-verify after any token edit).
