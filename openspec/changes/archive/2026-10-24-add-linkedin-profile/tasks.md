# Tasks

## 1. Configure the URL

- [x] 1.1 Set `linkedin` in `src/data/links.js` to `https://www.linkedin.com/in/sakshi-walia-business-strategy` and update the adjacent comment; verify `npm run check:content` passes
- [x] 1.2 Update the `links.js` line in `README.md` to say the LinkedIn link is set and how to change or hide it (`null`)

## 2. Verify behaviour

- [ ] 2.1 Run the dev server and confirm the "LinkedIn profile" link appears in the Contact section with the correct `href`, `target="_blank"`, and `rel="noopener noreferrer"`
- [ ] 2.2 Confirm the link opens the intended public profile (manual click-through)
- [ ] 2.3 Responsive check at 360, 768, and 1280 px: link visible, no overlap or horizontal overflow
- [ ] 2.4 Accessibility check: reachable by keyboard, visible focus ring, accessible name identifies LinkedIn
- [x] 2.5 Run `npm run lint` and `npm run build`; both must pass
