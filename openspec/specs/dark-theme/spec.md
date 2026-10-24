# dark-theme Specification

## Purpose
Defines the portfolio's single, always-dark appearance. There is no light theme and no theme control.

## Requirements

### Requirement: Dark theme is the only theme
The site SHALL render every section, the navigation bar and the case-study dialog using the dark theme, regardless of the visitor's operating-system `prefers-color-scheme` setting or any previously stored preference.

#### Scenario: Light OS setting
- **WHEN** a visitor whose system preference is light opens the site
- **THEN** the dark theme is displayed

#### Scenario: Stale stored preference
- **WHEN** the browser holds a previously stored `theme` value of `light`
- **THEN** it is ignored, the dark theme is displayed, and the stale key is removed on a best-effort basis without showing an error if storage is blocked

#### Scenario: No JavaScript dependency
- **WHEN** the page is first painted
- **THEN** the first rendered frame is already dark, with no flash of a light theme and without relying on any script to choose the theme

### Requirement: No theme control
The site SHALL NOT display a theme toggle or any other control for changing between light and dark appearances.

#### Scenario: Navigation bar contents
- **WHEN** the navigation bar is displayed at any supported viewport width
- **THEN** it shows the brand, section links, the Resume action and (on narrow viewports) the menu toggle, with no theme toggle, and nothing overlaps or overflows horizontally

#### Scenario: Navigation behaviour unchanged
- **WHEN** a visitor uses scroll-spy, the mobile menu, or Escape to close the menu
- **THEN** these behave as before the change

### Requirement: Browser chrome matches dark theme
The site SHALL declare `color-scheme: dark` and a single `theme-color` equal to the dark background colour.

#### Scenario: Native controls
- **WHEN** the page renders scrollbars or native form controls
- **THEN** they use their dark variants

#### Scenario: Browser UI colour
- **WHEN** a mobile browser reads the `theme-color` meta
- **THEN** it receives the dark background colour regardless of the OS setting

### Requirement: Dark theme meets contrast and motion guarantees
The dark theme SHALL meet WCAG 2.1 AA contrast for text and interactive elements, and its section surfaces (including the Contact band and case-study dialog) SHALL remain visually distinguishable from adjacent surfaces.

#### Scenario: Contrast
- **WHEN** any text or control is rendered
- **THEN** its contrast against its background is at least 4.5:1 (3:1 for large text and UI boundaries)

#### Scenario: Focus visibility
- **WHEN** an interactive element receives keyboard focus
- **THEN** a visible focus indicator with at least 3:1 contrast against its surroundings is shown

#### Scenario: Surface separation
- **WHEN** the Contact band or alternate-background sections are displayed next to other sections
- **THEN** the boundary between them remains visible
