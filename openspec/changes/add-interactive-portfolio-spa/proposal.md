# Proposal

## Why

Sakshi Walia is a Strategy & Insights professional (2 years at EssenceMediacom | WPP Media, PGPM in Marketing & Analytics) looking for her next role. Today her story lives in a one-page PDF, which undersells work like the Dell Alienware GTM turnaround (#4 → #2 in category) and 20+ industry awards. Recruiters and hiring managers skim quickly; an interactive, well-animated portfolio lets her results lead, differentiates her from other candidates, and demonstrates the storytelling skill she claims.

The repo currently holds only the Vite + React starter (`<h1>Sakshi Walia</h1>`), so this is the right time to define the full product before building it.

## What Changes

- Build a single-page React application (no backend) that presents Sakshi's profile, sourced from `src/assets/Sakshi_Walia.pdf`, using her photo `src/assets/sakshi-walia-avatar.png`.
- Add a sticky navigation with scroll-spy and smooth scrolling between sections: Hero, About, Impact, Experience & Case Studies, Skills & Tools, Education, Contact.
- Add an animated hero (name, role positioning "Strategy · Market Research · Consumer Insights", photo, primary CTAs: download resume, get in touch).
- Add an "Impact at a glance" strip with count-up metrics taken only from the resume (e.g. brand health +4–5 pts, #4 → #2 ranking, ROAS +30–40%, 20+ awards, 2 yrs experience).
- Add an interactive experience timeline for the EssenceMediacom | WPP Media role, with expandable case-study cards for each Dell initiative (Alienware GTM, MMM channel strategy, Dell Futurist, Dell for Bharat, market prioritization framework, fractional attribution model, award submissions) framed as Challenge → Approach → Outcome.
- Add interactive skills and tools visualisation (filterable by category: Strategy, Insights & Research, Analytics, Platforms & Data Sources, AI tools).
- Add education timeline and additional information (club leadership, reliability).
- Add a contact section with `mailto:`/`tel:` actions, resume download, and LinkedIn link.
- Add a shared motion system (scroll-reveal, hover/tap micro-interactions, page-load sequence, animated background accents) that honours `prefers-reduced-motion`.
- Add SEO/social metadata, favicon, and optimised image delivery; replace the template README/title.
- Content (copy, metrics, dates) lives in one typed-by-convention data module so it can be edited without touching components.

Out of scope: backend, CMS, blog, contact form with server-side delivery, authentication, analytics/tracking, multi-language support, a visitor-facing dark/light toggle beyond respecting system preference, and any content not present in the resume (such as testimonials, extra projects or certificates) unless Sakshi supplies it.

**Content dependencies on Sakshi** (placeholders until provided): LinkedIn profile URL (the PDF link text has no URL embedded), case-study narrative detail beyond the resume bullets (e.g. creative visuals, exact baselines), any permission to name Dell publicly in a portfolio, and optional testimonials/portfolio visuals.

## Capabilities

### New Capabilities
- `portfolio-shell`: SPA frame — section layout, sticky navigation with scroll-spy, theming, responsive behaviour, accessibility baseline, SEO/social metadata, performance budget, and the single content data source.
- `portfolio-hero`: Animated landing/hero and About summary with photo, positioning statement, and primary CTAs.
- `career-showcase`: Impact metrics, experience timeline, and expandable Dell case-study cards, plus awards recognition.
- `skills-and-credentials`: Filterable skills and tools display, education timeline, and additional information (leadership roles, reliability).
- `portfolio-contact`: Contact options, resume download, and social/profile links, with a final call to action.
- `motion-system`: Shared animation behaviour — entrance/scroll reveals, interactive micro-interactions, count-up numbers, and reduced-motion fallbacks.

### Modified Capabilities
<!-- None: openspec/specs is empty. -->

## Impact

- **Code**: new components, styles, and data under `src/`; replaces the placeholder `src/App.jsx`, `src/App.css`, `src/index.css`; updates `index.html` (title, meta, fonts) and `README.md`.
- **Assets**: `sakshi-walia-avatar.png` (1254×1254, ~1.9 MB) must be resized/compressed to modern formats; `Sakshi_Walia.pdf` is copied to `public/` (or imported as an asset) for download.
- **Dependencies**: one animation library (`motion`), self-hosted variable fonts (`@fontsource-variable/*`), and `sharp` as a dev-only image optimisation tool; no router or state library (see design.md).
- **Tooling**: existing Vite build and ESLint must pass; no new test framework is mandated by this change.
- **Privacy**: the resume's email and phone number become publicly visible on the site; confirm with Sakshi before publishing.
