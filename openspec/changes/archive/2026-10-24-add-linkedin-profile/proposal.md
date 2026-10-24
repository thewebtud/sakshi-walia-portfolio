# Proposal

## Why

The Contact section is built to show a LinkedIn link, but it is hidden because `links.linkedin` in `src/data/links.js` is still `null`. Recruiters and hiring managers routinely check LinkedIn to verify experience and connect, so the missing link is a gap in an otherwise complete contact area. Sakshi has now supplied her profile URL.

## What Changes

- Set `links.linkedin` in `src/data/links.js` to `https://www.linkedin.com/in/sakshi-walia-business-strategy`, which makes the existing "LinkedIn profile" link in the Contact section render (new tab, `rel="noopener noreferrer"`).
- Use the supplied URL with the `https://` scheme added. It was given as `www.linkedin.com/in/sakshi-walia-business-strategy`; without a scheme the browser would treat it as a relative path and `scripts/check-content.mjs` rejects non-`https` values.
- Tighten the `portfolio-contact` requirement "Professional profile link" so it states the configured URL, requires an absolute `https` URL, and no longer describes the link as pending.
- Update the `links.js` note in `README.md` and the comment in `links.js` so they no longer describe the link as "hidden while null" as the current state.

Out of scope: a LinkedIn link in the Hero, navbar, or footer; a LinkedIn "Open Graph" or `sameAs` structured-data entry; other social profiles; changes to the icon or Contact layout; copy changes.

## Impact

- **Visitors**: recruiters and prospective clients can open her LinkedIn profile directly from the Contact section.
- **Affected specs**: `portfolio-contact` (MODIFIED: "Professional profile link").
- **Affected code**: `src/data/links.js`, `README.md`. No component changes; `Contact.jsx` already renders the link when the value is set. `scripts/check-content.mjs` already validates it.
- **Dependencies**: none added.
- **Performance / accessibility**: no impact; the link reuses the existing markup, icon, and focus styles.
- **Content dependency**: the URL is supplied. Sakshi should confirm the profile slug resolves to her public profile before release.
