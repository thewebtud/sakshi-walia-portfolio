# Proposal

## Why

The portfolio currently ships both a light and a dark theme, switched by a navbar toggle (`add-theme-toggle`) or by the visitor's OS setting. The owner wants a single, consistent dark look. Maintaining two themes doubles the colour-contrast and visual-QA surface, and the toggle adds navbar UI that is no longer needed. Making dark the only theme gives every visitor the same intended presentation, removes the toggle, and simplifies the styling code.

## What Changes

- Make dark the only appearance, regardless of the visitor's OS `prefers-color-scheme` setting or any previously stored choice.
- Remove the light theme tokens and the `prefers-color-scheme` fallback block from `src/styles/tokens.css`; define the dark tokens once on `:root` with `color-scheme: dark`.
- Remove the theme toggle button from `Navbar.jsx` / `Navbar.css`; keep the mobile menu toggle and the Resume action, and re-check navbar spacing at all widths.
- Delete `src/hooks/useTheme.js` and the now-unused `SunIcon` / `MoonIcon` from `Icons.jsx`.
- Remove the pre-paint inline theme script and the light `theme-color` meta from `index.html`; use a single `<meta name="theme-color">` with the dark background value.
- Remove the `:root[data-theme-transition]` colour-transition rule from `src/styles/base.css`.
- Clean up the obsolete `localStorage` `theme` key (one-time, best-effort) so stale values are not left behind.
- Re-audit surfaces that were tuned for both themes (Hero blobs/grid lines, `Contact.css` dark band, `CaseStudyDialog.css` backdrop, focus rings, `--bg-alt` section banding) so nothing relies on light-theme assumptions and the Contact band remains distinguishable from neighbouring sections.
- Update the README accessibility line that says the theme follows the system setting.

Out of scope: a new colour palette or redesign (the existing dark tokens are kept as-is), re-theming the OG image, copy or resume-sourced content changes, and any re-introduction of a toggle.

## Impact

- **Visitors**: always see the dark theme; no theme control is shown. Visitors on a light OS setting will now get dark.
- **Affected specs**: new capability `dark-theme`; removes every requirement of the `theme-toggle` capability (archived from `add-theme-toggle`), since the toggle no longer exists. The navbar requirement in `portfolio-shell` (from `add-interactive-portfolio-spa`, not yet archived) is not modified here because a delta against it cannot be archived until that change lands.
- **Affected code**: `index.html`, `src/styles/tokens.css`, `src/styles/base.css`, `src/components/Navbar.jsx` / `Navbar.css`, `src/components/ui/Icons.jsx`, removal of `src/hooks/useTheme.js`, `README.md`, plus a colour audit of `Hero.css`, `Contact.css`, `CaseStudyDialog.css`.
- **Accessibility**: dark tokens must still meet WCAG 2.1 AA; no light-mode fallback exists for visitors who need it (e.g. prefer light for readability). This is an accepted trade-off by the owner; browser/OS forced-colours and reader modes are unaffected.
- **Dependencies**: none added.
- **Performance**: slightly positive (less CSS, no inline script, no hook).
- **Content dependency**: none; no information is needed from Sakshi.
