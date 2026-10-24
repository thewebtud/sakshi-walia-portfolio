# Tasks

## 1. Project setup and foundations

- [x] 1.1 Install `motion`, `@fontsource-variable/*` (chosen display + text fonts) and dev-only `sharp`; verify `npm install` succeeds and `npm run build` still passes
- [x] 1.2 Replace template files (`App.css`, `index.css`, unused starter assets/`public/icons.svg` references) with `src/styles/tokens.css` (colour light/dark, type scale, spacing, motion tokens) and a global reset; verify AA contrast for all text/background token pairs in both themes with a contrast checker
- [x] 1.3 Create `scripts/optimise-images.mjs` and generate AVIF/WebP/JPEG (480/800/1200 px) of the photo into `src/assets/generated/` plus `public/og-image.jpg` (1200×630); verify generated files exist and the largest hero variant is under 150 KB
- [x] 1.4 Copy `src/assets/Sakshi_Walia.pdf` to `public/Sakshi_Walia.pdf`; verify `npm run dev` serves it at `/Sakshi_Walia.pdf`
- [x] 1.5 Update `index.html`: title, meta description, `lang`, Open Graph/Twitter tags, theme-color, favicon, and `noscript` fallback with resume link and email; verify with view-source and that the page title no longer shows the template default

## 2. Content layer

- [x] 2.1 Create `src/data/` modules (`profile`, `metrics`, `experience`, `caseStudies`, `skills`, `education`, `additional`, `links`) populated strictly from the resume, with `links.linkedin = null`; verify by a line-by-line comparison against `Sakshi_Walia.pdf`
- [x] 2.2 Author the seven case studies (Challenge/Approach/Outcome, theme, skill ids) using only resume facts and flag copy for Sakshi's review; verify no figure appears that is absent from the resume
- [x] 2.3 Add `scripts/check-content.mjs` and an `npm run check:content` script (unique ids, valid skill references, every resume skill in exactly one category, required fields); verify it passes and fails when a skill reference is deliberately broken

## 3. App shell and shared primitives

- [x] 3.1 Build `App` layout with `MotionConfig reducedMotion="user"`, `LazyMotion`, skip link, landmarks, and the seven section containers with scroll-margin for the sticky nav; verify one `h1`, landmark structure and section order in the DOM
- [x] 3.2 Implement `Navbar` (sticky, resume action, active link) with the `useScrollSpy` hook and mobile menu (toggle, closes on link/Escape, focus management); verify active link tracks scrolling and the menu works with keyboard at 360 px width
- [x] 3.3 Implement shared `Reveal`, `SectionHeading`, `CountUp`, and `ScrollProgress` primitives; verify reveals fire once, count-up ends on the exact value, and the progress bar tracks scroll
- [x] 3.4 Add `useCopyToClipboard` hook with failure handling; verify success and failure states with clipboard permission denied

## 4. Hero and About

- [x] 4.1 Build `Hero` with staged load animation, photo `<picture>` with explicit dimensions, pointer-reactive depth effect (disabled for coarse pointers/reduced motion), and "Download Resume"/"Get in touch" CTAs; verify above-the-fold content at 1366×768 and 390×844 and that the download works
- [x] 4.2 Implement the rotating focus-area headline with an `aria-hidden` animated word and a visually hidden static list; verify it cycles, and shows a static list under reduced motion
- [x] 4.3 Build `About` with narrative summary and highlight facts; verify wording matches the resume summary and stays within about 80 words

## 5. Career showcase

- [x] 5.1 Build `Impact` with four count-up metric tiles and source labels; verify values match the resume and are readable instantly under reduced motion
- [x] 5.2 Build the `Experience` timeline with scroll-drawn connecting line and role details; verify title, employer, location and dates match the resume
- [x] 5.3 Build `CaseStudyCard` grid with theme filter (`ThemeFilter`) and animated layout transitions plus result-count live region; verify filtering, "All" reset, and screen-reader announcement
- [x] 5.4 Build `CaseStudyDialog` using native `<dialog>` with Challenge/Approach/Outcome, previous/next, Escape/outside-click/close-button closing and focus return; verify keyboard-only open, navigate, and close, with focus restored to the originating card
- [x] 5.5 Add the awards highlight with exact wording limited to what the resume states; verify the copy against the resume

## 6. Skills and credentials

- [x] 6.1 Build `Skills` with categorised chips and category filter; verify every resume skill appears exactly once (`npm run check:content`) and no percentage or rating UI exists
- [x] 6.2 Add skill → related case studies popover/list derived from the reverse index, opening the matching case study; verify a linked skill navigates correctly and an unlinked skill shows no empty link
- [x] 6.3 Build `Education` timeline (reverse chronological) and `Additional` leadership/reliability block; verify entries and dates against the resume and layout at 360 px

## 7. Contact and finishing

- [x] 7.1 Build `Contact` with `mailto:` (prefilled subject), `tel:`, copy-email with live-region confirmation, resume download, and LinkedIn link rendered only when `links.linkedin` is set; verify each action, and that nothing renders when the URL is `null`
- [x] 7.2 Build `Footer` and the closing call to action; verify the primary action is keyboard reachable
- [x] 7.3 Add error boundary fallback for sections; verify by temporarily throwing in one section that the rest of the page still renders (revert afterwards)
- [x] 7.4 Add hover/focus/press micro-interactions and the card tilt effect; verify distinct states within 150 ms and no tilt on touch or reduced motion

## 8. Quality gates and documentation

- [x] 8.1 Run `npm run lint`, `npm run check:content`, and `npm run build`; verify all pass with no warnings in the build output
- [x] 8.2 Run Lighthouse (mobile) against `npm run preview`; verify Performance ≥ 90, Accessibility ≥ 95, SEO ≥ 95, and no layout shift from images/fonts
- [ ] 8.3 Manual accessibility pass: keyboard-only walkthrough, screen-reader spot check of headings/landmarks/dialog, 200% zoom, and reduced-motion emulation; verify against every scenario in `specs/portfolio-shell` and `specs/motion-system`
- [x] 8.4 Responsive pass at 320, 360, 768, 1366 and 1920 px in light and dark themes; verify no horizontal scroll, overlap or clipped content
- [x] 8.5 Verify no third-party network requests in the browser network panel and that `public/Sakshi_Walia.pdf` matches `src/assets/Sakshi_Walia.pdf`
- [x] 8.6 Replace the template `README.md` with project description, scripts, how to edit content in `src/data/`, how to regenerate images and refresh the resume PDF, and deployment notes; verify each documented command runs as written
- [ ] 8.7 Share the preview with Sakshi to approve copy, Dell naming, public phone/email, and supply the LinkedIn URL; verify content updates land only in `src/data/`

## Workflow follow-up

- Archive the change after Sakshi has approved the content and the quality gates pass.
