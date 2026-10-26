# Design

## Context

`tokens.css` defines one dark palette on `:root` (`--bg #101216`, pink `--accent`, amber `--accent-2`) with `color-scheme: dark`. Several components hard-code colours (notably `Contact.css`, which has ~25 literals, plus single literals in `Hero.css` and `CaseStudyDialog.css`). `Hero.css` uses `--blob-*` and `--grid-line` tokens for its background. Animation uses the `motion` library (`Reveal.jsx`, `motionFeatures.js`) plus CSS transitions. Fonts are Fraunces (display) and Plus Jakarta Sans (text).

## Decisions

### 1. Token-first re-palette
Change the existing token values rather than renaming them, so most components restyle without edits. Add a small set of new tokens: per-section tints (`--tint-about`, `--tint-impact`, …), pastel accents (`--pastel-peach/mint/sky/butter/lilac`), darker "ink" companions for text/borders on those pastels, `--shadow-sticker` (offset soft shadow), and `--tilt` angles. Indicative palette (to be tuned by contrast checks):

| Role | Indicative value |
|------|------------------|
| `--bg` | `#fff9f3` (warm cream) |
| `--bg-alt` | `#f6f1ff` (pale lilac) |
| `--text` | `#2b2540` (deep ink) |
| `--text-muted` | `#5b5470` |
| `--accent` (buttons, links) | `#7a4de0` (deep lilac) with `--on-accent #ffffff` |
| pastel fills | peach `#ffd9c7`, mint `#cdf2e1`, sky `#cfe6ff`, butter `#fff0b8`, lilac `#e4d9ff`, pink `#ffd3e6` |
| `--focus` | `#5b2fd0` |

**Rule:** pastels are for surfaces, decoration and badges only. Text and interactive boundaries use ink/deep tokens. Every text/background pair is verified at ≥ 4.5:1 (3:1 for large text and UI boundaries).

**Alternative rejected:** a dark base with pastel accents. The owner chose a light pastel base, which also simplifies the "pastel on dark" glow problem.

### 2. Section tints, not a single background
Each section gets a distinct pastel tint via a section-level custom property (e.g. `--section-bg`), keeping one structural pattern. Adjacent sections must differ visibly; where two tints are close, add a soft wavy/curved divider (inline SVG or CSS mask) rather than a hard line.

### 3. Playful language through CSS first
- **Blobs:** reuse the existing `.hero__blob` mechanism with pastel `--blob-*` colours and `border-radius` organic shapes; remove the grid lines.
- **Stickers/chips:** rounded pill, ink outline or soft offset shadow, small fixed rotation (±1–3°).
- **Tilted cards:** `transform: rotate(var(--tilt))` on cards, resetting to `0` on hover/focus-visible. Rotation is small to avoid text anti-aliasing issues and clipped content; case-study cards keep full tap area.
- **Bouncy feedback:** spring via `motion` `whileHover` / `whileTap` where a component is already a motion element, otherwise a CSS `cubic-bezier(0.34, 1.56, 0.64, 1)` overshoot easing token (`--ease-bounce`).

No new dependency is needed.

### 4. Decorative elements are inert
Floating shapes are `aria-hidden`, `pointer-events: none`, animate only `transform`/`opacity`, and pause off-screen. Under `prefers-reduced-motion` they render static and tilts/bounces are removed or reduced to opacity/colour changes.

### 5. Contact band and dialog
The Contact band stops being a dark band and becomes a saturated pastel (e.g. lilac/pink gradient) with ink text. The case-study dialog uses a light surface with a tinted translucent backdrop; the backdrop and surface must remain distinguishable. Hard-coded literals in `Contact.css`, `Hero.css` and `CaseStudyDialog.css` move to tokens.

### 6. Browser chrome
`color-scheme: light`, a single `theme-color` meta equal to the light `--bg` value. No pre-paint script is needed because the theme is static CSS.

### 7. Spec housekeeping
The `dark-theme` capability is fully removed and replaced by `pastel-theme`; the "no theme control" rule is carried over. The stale `portfolio-shell` "System colour-scheme preference" requirement (already contradicted by dark-only) is removed so specs match reality.

## Risks / Trade-offs

- **Contrast:** pastel palettes easily fail AA. Mitigated by the ink/deep companion tokens and a mandatory contrast audit task.
- **"Too much":** playful effects can undermine a professional first impression. Keep to the "polished" intensity: small tilts, few floating shapes, and no effect on body text.
- **Branding assets:** `og-image.jpg`, `logo.svg` and `favicon.svg` were designed for the dark look; they may clash on social previews. Follow-up, not in this change.
- **Motion budget:** more animated elements raise the cost on low-end phones; limit continuous animation to a few decorative shapes and pause when off-screen.
- **Taste risk:** palette is subjective; implementation includes an owner visual review checkpoint before finalising.
