## Context

Greenfield build on the Vite + React 19 starter in this repo (plain JavaScript/JSX, ESLint configured, no router, no test framework, no UI libraries). The product is a static, single-page portfolio (see proposal.md - Why) whose only content source is `src/assets/Sakshi_Walia.pdf` (one page, one role, three education entries) plus the photo `src/assets/sakshi-walia-avatar.png` (1254×1254, ~1.9 MB). The photo shows a dark charcoal wall with a "Smart Strategy · Real Results" mark, which informs the visual direction.

Constraints from `openspec/config.yaml`: static front end, mobile-first, WCAG 2.1 AA, Lighthouse ≥ 90, no invented content, no secrets.

## Goals / Non-Goals

**Goals:**
- A visually distinctive, highly interactive portfolio that makes impact numbers and the Dell case studies the centre of the experience.
- One editable content layer; components contain no hard-coded resume facts.
- Motion that enhances rather than gates content, fully degradable.

**Non-Goals:**
- TypeScript migration, SSR/SSG, CMS, i18n, a visitor theme toggle, analytics, or a contact backend.
- A 3D/WebGL hero (cost to performance and accessibility outweighs benefit for this audience).

## Decisions

### D1. Plain React + Vite, no router
Sections are anchors on one page; navigation uses hash links, smooth scrolling and an `IntersectionObserver`-based scroll-spy hook. A router adds nothing for one page.
*Alternatives:* React Router (unneeded complexity); Next.js (SSR not required, replaces the existing setup).

### D2. `motion` (Motion for React) for animation, CSS for micro-interactions
Use `motion/react` for entrance orchestration, scroll reveals (`whileInView`), scroll progress (`useScroll`), count-up, layout/`AnimatePresence` transitions for filtering and the case-study dialog, and a global `MotionConfig reducedMotion="user"`. Simple hover/focus/press feedback stays in CSS. Bundle impact is controlled by using `LazyMotion` with `domAnimation` features.
*Alternatives:* GSAP + ScrollTrigger (powerful but larger, licensing nuance, more imperative code in React); CSS-only (cannot cleanly do layout/exit animations or count-up); `react-spring` (weaker scroll/layout story).

### D3. Styling: hand-written CSS with design tokens
Global `src/styles/tokens.css` (colour, spacing, type scale, radii, motion durations/easings) and one CSS file per component. Light and dark palettes via `prefers-color-scheme` on custom properties, so the correct theme paints first with no flash. Palette derived from the photo (charcoal/ink, warm off-white, a rose/magenta accent, amber highlight), contrast verified at AA for both themes.
*Alternatives:* Tailwind (new tooling, not needed); CSS-in-JS (runtime cost); CSS Modules (viable, but plain scoped class-name prefixes are enough at this size).

### D4. Content as data modules
`src/data/` exports `profile`, `metrics`, `experience`, `caseStudies`, `skills`, `education`, `additional`, and `links`. Each case study has `id`, `title`, `theme`, `summary`, `challenge`, `approach`, `outcome`, `metric?`, and `skills[]` (skill ids). The skill → case-study reverse index is derived at runtime, so skills linking to work needs no duplicate data. `links.linkedin` is `null` until supplied; the contact UI renders nothing for a null value.
A dependency-free `scripts/check-content.mjs` (run via `npm run check:content`) validates data integrity: unique ids, every `skills[]` reference exists, every resume skill is in exactly one category, and required fields are present.

### D5. Case-study detail via native `<dialog>`
`<dialog>.showModal()` gives focus containment, Escape handling, and inertness of the background for free; Motion animates the panel. Focus returns to the invoking card on close. Next/previous controls move between case studies in the currently filtered order.
*Alternatives:* a modal library (extra dependency); accordion expansion (breaks layout flow and is weaker for long narrative).

### D6. Rotating headline accessibility
The animated word is `aria-hidden`; a visually hidden static sentence lists all focus areas. Under reduced motion the rotation is replaced by the static list.

### D7. Count-up and reveal logic
`useInView({ once: true })` triggers a single reveal/count. The final value is rendered in the DOM text (or `aria-label`) from the start so screen readers and no-motion users get the exact number, e.g. "20+", "+30–40%". Values are stored as display strings plus numeric parts (`prefix`, `from`, `to`, `suffix`) to preserve ranges like 4–5.

### D8. Image and font strategy
- Photo: a one-off script (`scripts/optimise-images.mjs`, using `sharp` as a devDependency) generates AVIF/WebP/JPEG at 480/800/1200 px into `src/assets/generated/`, used in a `<picture>` with explicit `width`/`height`. A 1200×630 social image is generated into `public/og-image.jpg`.
- Fonts: one variable display font and one variable text font, self-hosted via `@fontsource-variable/*` packages (no third-party font requests, matching the no-third-party-requests requirement), `font-display: swap` with size-adjusted fallbacks to avoid shift.

### D9. Resume file handling
The PDF is copied to `public/Sakshi_Walia.pdf` for a stable URL used by every download link and the `noscript` fallback; `src/assets/Sakshi_Walia.pdf` remains the editing source and the README documents the copy step.

### D10. Visual and interaction concept
Editorial "strategy dashboard" aesthetic: large type, bento-style layout for Impact and case studies, thin chart/arrow motifs echoing the photo's growth mark. Decorative gradient blobs and a grid background provide parallax depth. The experience timeline draws its connecting line as the user scrolls. Case-study cards tilt subtly on pointer hover (disabled for coarse pointers and reduced motion).

### D11. Component structure
`App` → `Navbar`, `ScrollProgress`, `Hero`, `About`, `Impact`, `Experience` (`Timeline`, `CaseStudyCard`, `CaseStudyDialog`, `ThemeFilter`), `Skills` (`SkillFilter`, `SkillChip`), `Education`, `Contact`, `Footer`; shared hooks `useScrollSpy`, `useReducedMotionSafe`, `useCopyToClipboard`; shared `Reveal`, `SectionHeading`, `CountUp` primitives.

## Risks / Trade-offs

- [Case-study narratives extend beyond one-line resume bullets] → Write Challenge/Approach/Outcome strictly from resume facts, avoid invented numbers, and ask Sakshi to review all copy before publishing.
- [Single role and ~2 years may feel thin] → Lead with outcomes, depth in case studies, and education/analytics breadth; do not pad with fabricated projects.
- [Heavy animation harms performance or accessibility] → Animate transform/opacity only, `once` reveals, pause off-screen loops, Lighthouse check, reduced-motion path tested explicitly.
- [Naming Dell in a public portfolio may need employer/client sign-off] → Flag to Sakshi; content is isolated in `src/data/` so names can be generalised quickly.
- [Public email/phone invite spam] → Confirm with Sakshi; option to show email only and drop the phone number is a one-line data change.
- [`motion` adds bundle weight] → `LazyMotion` + `domAnimation`, code-split the dialog, verify bundle size in build output.
- [Copy of the PDF in `public/` can drift from the source] → README note and a task to verify the files match before release.

## Migration Plan

Greenfield replacement of the starter UI; nothing to migrate. Deploy `dist/` to any static host (Netlify, Vercel, GitHub Pages, Cloudflare Pages). Rollback is redeploying the previous build.

## Open Questions

- Final production URL (needed for absolute Open Graph image and canonical URLs).
- Sakshi's LinkedIn URL and whether to show her phone number publicly.
- Whether any additional visuals (campaign creatives, award badges) can be shared.
