# Spec Delta

## MODIFIED Requirements

### Requirement: Professional profile link
The Contact section SHALL link to her LinkedIn profile at `https://www.linkedin.com/in/sakshi-walia-business-strategy`, opening in a new tab with safe link attributes. The URL MUST be an absolute `https` URL held in the site's content configuration; if the configured value is empty, the link MUST NOT be shown and no guessed URL may be used.

#### Scenario: URL configured
- **WHEN** a visitor views the Contact section
- **THEN** a "LinkedIn profile" link is displayed with the LinkedIn icon, pointing to `https://www.linkedin.com/in/sakshi-walia-business-strategy`, and it opens in a new tab without giving the target page access to the opener

#### Scenario: Keyboard and assistive technology
- **WHEN** a visitor navigates the Contact section by keyboard or screen reader
- **THEN** the LinkedIn link is reachable in tab order, shows a visible focus indicator, and has an accessible name that identifies it as her LinkedIn profile

#### Scenario: Responsive layout
- **WHEN** the Contact section is displayed at 360, 768, and 1280 px widths
- **THEN** the LinkedIn link is visible, does not overlap other contact items, and causes no horizontal overflow

#### Scenario: URL not configured
- **WHEN** no LinkedIn URL is configured
- **THEN** no LinkedIn link is rendered and no broken or placeholder link is visible to visitors

#### Scenario: Invalid URL rejected
- **WHEN** the configured LinkedIn value is not an absolute `https` URL
- **THEN** the content check (`npm run check:content`) fails with a clear message
