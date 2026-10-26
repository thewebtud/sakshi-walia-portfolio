# Tasks

## 1. Palette and tokens

- [x] 1.1 Rewrite `src/styles/tokens.css` with the light pastel palette, ink text tokens, per-section tints, pastel accent fills, `--shadow-sticker`, tilt and `--ease-bounce` tokens; set `color-scheme: light`; verify the page renders with no unstyled or illegible areas
- [x] 1.2 Update `index.html`: single `theme-color` equal to the new `--bg`; verify in devtools
- [x] 1.3 Audit every text/background and UI-boundary token pair with a contrast checker (≥ 4.5:1 text, ≥ 3:1 large text/UI/focus); adjust darker companion tokens until all pass

## 2. Base, buttons and navbar

- [x] 2.1 Restyle `base.css` and `buttons.css` (pill buttons, deep primary fill with white label, bouncy hover/press, visible `:focus-visible` ring); verify 44×44 px targets
- [x] 2.2 Restyle `Navbar.css` for the light palette (translucent cream bar, sticker-style active link); verify no overlap or overflow at 360, 768 and 1280 px and that scroll-spy and the mobile menu behave as before

## 3. Sections

- [x] 3.1 Hero: replace the grid/dark blobs with pastel organic blobs and floating decorative shapes (`aria-hidden`, `pointer-events: none`); keep the photograph interaction and rotating highlight working
- [x] 3.2 About and Impact: apply section tints, sticker-style stats/badges; verify count-up still ends on exact values
- [x] 3.3 Experience and case-study cards: tilted cards (≤ 3°) that straighten on hover/focus, sticker tags, pastel theme-filter chips; verify filtering animation and expansion still work
- [x] 3.4 Skills and Education: pastel chips/cards and tints; verify no self-rated proficiency is introduced
- [x] 3.5 Contact: replace the dark band and hard-coded literals in `Contact.css` with a pastel band using tokens; verify AA contrast and that contact and resume actions are unchanged
- [x] 3.6 Case-study dialog: light surface, tinted backdrop, readable close and filter controls; verify focus trap and Escape still work and backdrop and surface are distinguishable
- [x] 3.7 Add soft dividers where adjacent section tints are too similar; verify each boundary is visible

## 4. Playful motion

- [x] 4.1 Add spring/bounce hover and press feedback to buttons, chips and cards using `motion` or `--ease-bounce`; verify feedback starts within 150 ms
- [x] 4.2 Add gentle floating to a small number of decorative shapes using only `transform`/`opacity`, paused when off-screen
- [x] 4.3 Add `prefers-reduced-motion` fallbacks (no tilt, spring or floating); verify with the OS setting on and toggled live

## 5. Cleanup and docs

- [x] 5.1 Remove leftover dark-only values (`--grid-line`, dark blob colours, hard-coded dark hex/rgb values) from CSS; grep to confirm none remain
- [x] 5.2 Update the README line describing the theme

## 6. Verification

- [ ] 6.1 Run `npm run lint` and `npm run build`; both must pass (build passes; lint still reports 3 pre-existing unused-variable errors in `App.jsx`, `Education.jsx`, `Experience.jsx` that are unrelated to this change)
- [x] 6.2 Run `npm run check:content` to confirm resume-sourced content is unchanged (passes when loaded through Vite: 31 skills, 7 case studies, 4 metrics; no data files modified. Plain `npm run check:content` still crashes on `import.meta.env` under Node, which pre-dates this change)
- [x] 6.3 Responsive check at 360, 768 and 1280 px: no overflow or clipped tilted cards, all sections and the dialog legible
- [x] 6.4 Accessibility check: Lighthouse accessibility 100 with colour-contrast passing; keyboard Tab walkthrough of 60 stops showed a 3px focus outline on every stop, the skip link first, no stop under 44px tall and no trap; decorative shapes are `aria-hidden`; reduced-motion removes tilt, spring and floating
- [x] 6.5 Lighthouse check on the production build: performance 94, accessibility 100, best-practices 100, SEO 100
- [x] 6.6 Owner visual review of the palette and playfulness level (owner reviewed and reported one Contact-section overlap, which was fixed)
