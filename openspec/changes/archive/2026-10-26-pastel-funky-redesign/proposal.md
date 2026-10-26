# Proposal

## Why

The portfolio currently uses a single dark theme with pink/amber accents. It reads as polished but serious, and the owner wants it to feel more personal, playful and memorable for a marketing audience, where creativity and brand sense are part of the pitch. A soft pastel palette with a few playful touches ("funky but polished") makes the site stand out to recruiters and prospective clients without hiding the results-oriented content.

## What Changes

- **BREAKING (visual)**: replace the always-dark appearance with a single **light pastel** theme (pastel backgrounds, deep ink text). Dark-only is retired; there is still no theme toggle and no OS-preference switching.
- Introduce a pastel palette in `src/styles/tokens.css` (cream/lavender base, with peach, mint, sky, butter and lilac accents) and a deep-ink text colour; decorative colours may be pastel, but text, buttons and focus rings use darker companion tokens to keep WCAG 2.1 AA contrast.
- Give each main section its own pastel tint so the page reads as a sequence of coloured "chapters" (for example About, Impact, Experience, Skills, Education, Contact), while keeping boundaries between sections clearly visible.
- Add a playful visual language, kept polished:
  - organic blob shapes and soft gradients replacing the dark grid/blob background;
  - sticker-style badges and chips (slightly rotated, rounded, thick-outline or soft-shadow);
  - gently tilted cards that straighten on hover/focus;
  - bouncy (spring-like) hover and press feedback on buttons, chips and cards;
  - a more expressive hero treatment (pastel blob behind the photograph, floating decorative shapes).
- Re-theme the Contact band, case-study dialog (backdrop, surface, filters) and navbar for the light palette.
- Switch `<meta name="theme-color">` and `color-scheme` to the light pastel background.
- Add the motion for the above with the existing `motion` library only; every continuous or movement-based effect honours `prefers-reduced-motion`.
- Update the README line describing the theme.

Out of scope: a dark variant or theme toggle, a marquee ticker, hand-drawn doodles or emoji stickers, new copy or resume-sourced content changes, layout/information-architecture changes, new fonts (the existing Fraunces and Plus Jakarta Sans are kept), new dependencies, re-theming `og-image.jpg` and the logo (tracked as a follow-up), and any backend work.

## Capabilities

### New Capabilities

- `pastel-theme`: the single light pastel appearance, section tints, playful visual language (blobs, stickers, tilted cards), browser chrome, and its contrast and accessibility guarantees.

### Modified Capabilities

- `dark-theme`: every requirement is **removed** (the dark-only appearance is retired); the "no theme control" rule is carried into `pastel-theme`.
- `portfolio-shell`: removes the stale "System colour-scheme preference" requirement, which conflicts with a single fixed theme.
- `motion-system`: adds a requirement for playful (spring) motion accents with reduced-motion fallbacks.

## Impact

- **Visitors**: see a lighter, friendlier, more colourful site; content, structure and calls to action are unchanged. Visitors on a dark OS setting will get the light pastel theme. Visitors who prefer dark have no alternative (accepted trade-off, as with the previous dark-only decision).
- **Affected code**: `index.html`, `src/styles/tokens.css`, `base.css`, `buttons.css`, all component CSS (notably `Hero.css`, `Contact.css`, `CaseStudyDialog.css`, `Experience.css`, `Impact.css`, `Skills.css`, `Navbar.css`), light changes to `Hero.jsx` and card/chip components for decorative elements and motion, `README.md`.
- **Accessibility**: pastel fills are low-contrast by nature, so text must never sit directly on a saturated pastel without a verified AA pair; tilted/animated elements must not reduce legibility or tap-target size.
- **Performance**: no new dependencies or images; decorative shapes are CSS/inline SVG and animate only `transform`/`opacity`. Lighthouse 90+ target is kept.
- **Content dependency**: none; no information is needed from Sakshi. The exact palette is a proposal and should be confirmed by the owner via a quick visual review during implementation.
