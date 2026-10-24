# Sakshi Walia: Marketing Portfolio

A single-page, animated portfolio for Sakshi Walia (Strategy & Insights). Built with React 19, Vite and [Motion](https://motion.dev). All content comes from her resume (`src/assets/Sakshi_Walia.pdf`).

## Scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Start the dev server |
| `npm run build` | Production build into `dist/` |
| `npm run preview` | Serve the production build locally |
| `npm run lint` | ESLint |
| `npm run check:content` | Validate the content data (unique ids, skill references, every resume skill present once) |
| `npm run images` | Regenerate responsive photo variants and the social image |

## Editing content

All copy lives in [`src/data/`](src/data); components contain no resume facts.

- `profile.js`: name, positioning, contact details, summary
- `metrics.js`: headline impact numbers (each links to a case study)
- `experience.js`: role, themes and the Dell case studies (Challenge / Approach / Outcome)
- `skills.js`, `education.js`: skills by category, education, additional information
- `links.js`: set `linkedin` to her profile URL to show the LinkedIn link (hidden while `null`)

Only use facts that appear in the resume. Run `npm run check:content` after editing.

## Photo and resume

- Photo: replace `src/assets/sakshi-walia-avatar.png`, then run `npm run images`. This writes variants to `src/assets/generated/` and `public/og-image.jpg`.
- Resume: `src/assets/Sakshi_Walia.pdf` is the source; the site serves the copy in `public/Sakshi_Walia.pdf`. After updating the source, copy it over:

  ```sh
  cp src/assets/Sakshi_Walia.pdf public/Sakshi_Walia.pdf
  ```

## Accessibility and motion

The site targets WCAG 2.1 AA. Animations respect `prefers-reduced-motion`, and the site uses a dark colour theme only.

## Deployment

`npm run build` produces a static site in `dist/` that can be hosted on any static host (Netlify, Vercel, GitHub Pages, Cloudflare Pages). Before launch, set absolute URLs for the Open Graph and Twitter images in `index.html` once the production domain is known.

