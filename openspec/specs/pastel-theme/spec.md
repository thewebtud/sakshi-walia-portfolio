# pastel-theme Specification

## Purpose
Defines the portfolio's single, always-light pastel appearance: palette and ink-text contrast rules, per-section tints, the playful visual language (blobs, stickers, tilted cards) and browser chrome. There is no dark theme and no theme control.

## Requirements

### Requirement: Light pastel theme is the only theme
The site SHALL render every section, the navigation bar and the case-study dialog using a single light pastel theme, regardless of the visitor's operating-system `prefers-color-scheme` setting or any previously stored preference.

#### Scenario: Dark OS setting
- **WHEN** a visitor whose system preference is dark opens the site
- **THEN** the light pastel theme is displayed

#### Scenario: No JavaScript dependency
- **WHEN** the page is first painted
- **THEN** the first rendered frame already uses the pastel theme, with no flash of another theme and without relying on any script

#### Scenario: Consistent across viewports
- **WHEN** the site is viewed at 360, 768 and 1280 px widths
- **THEN** the same palette and playful styling are applied and no content is clipped or overflows horizontally

### Requirement: No theme control
The site SHALL NOT display a theme toggle or any other control for changing between appearances.

#### Scenario: Navigation bar contents
- **WHEN** the navigation bar is displayed at any supported viewport width
- **THEN** it shows the brand, section links, the Resume action and (on narrow viewports) the menu toggle, with no theme toggle, and nothing overlaps

### Requirement: Pastel palette with ink text
The site SHALL use soft pastel colours for backgrounds, decorative shapes and badges, and SHALL use deep ink or dark accent colours for all text, icons that convey meaning, and interactive boundaries.

#### Scenario: Text on pastel surfaces
- **WHEN** any text is rendered on a pastel surface
- **THEN** its contrast ratio is at least 4.5:1 (3:1 for large text)

#### Scenario: Primary actions
- **WHEN** the Resume, Contact and other primary buttons are displayed
- **THEN** their label and fill meet 4.5:1 and they remain the most visually prominent action in their view

#### Scenario: Focus visibility
- **WHEN** an interactive element receives keyboard focus
- **THEN** a visible focus indicator with at least 3:1 contrast against its surroundings is shown

### Requirement: Distinct pastel section tints
Each main section SHALL have its own pastel tint so the page reads as a sequence of coloured sections, and adjacent sections MUST remain visibly separated.

#### Scenario: Adjacent sections
- **WHEN** a visitor scrolls between two sections
- **THEN** the tint change or a soft divider makes the boundary clear

#### Scenario: Contact band
- **WHEN** the Contact section is displayed
- **THEN** it is a distinct pastel band with ink text that meets AA contrast and still presents the contact and resume calls to action

### Requirement: Playful visual language
The site SHALL apply a playful but polished visual language consisting of organic blob shapes, sticker-style badges and chips, and slightly tilted cards, without reducing legibility or obscuring content.

#### Scenario: Tilted cards
- **WHEN** case-study or experience cards are displayed
- **THEN** each is tilted by no more than 3 degrees, its text remains fully visible and readable, and it straightens on hover or keyboard focus

#### Scenario: Decorative shapes are inert
- **WHEN** a screen reader or keyboard user navigates the page
- **THEN** decorative blobs and floating shapes are hidden from assistive technology, are not focusable, and do not intercept pointer events

#### Scenario: Touch targets
- **WHEN** tilted or sticker-styled controls are displayed on a touch device
- **THEN** each interactive target is at least 44×44 px

### Requirement: Browser chrome matches the pastel theme
The site SHALL declare `color-scheme: light` and a single `theme-color` equal to the pastel background colour.

#### Scenario: Native controls
- **WHEN** the page renders scrollbars or native form controls
- **THEN** they use their light variants

#### Scenario: Browser UI colour
- **WHEN** a mobile browser reads the `theme-color` meta
- **THEN** it receives the pastel background colour regardless of the OS setting

### Requirement: Content and structure unchanged
The restyle SHALL NOT change any resume-sourced text, metrics, links, section order or calls to action.

#### Scenario: Content parity
- **WHEN** the restyled site is compared with the previous version
- **THEN** all text content, links and section order are identical and the Resume and contact calls to action remain on every main view
