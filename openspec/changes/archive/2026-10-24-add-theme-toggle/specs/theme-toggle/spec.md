# Spec Delta

## Purpose

Lets visitors choose between a light and a dark appearance for the portfolio, remembers the choice, and otherwise respects their operating-system preference.

## ADDED Requirements

### Requirement: Theme toggle control
The site SHALL provide a theme toggle button in the navigation bar, reachable on every viewport size, that switches the page between the light and dark themes.

#### Scenario: Switch from light to dark
- **WHEN** the page is displayed in the light theme and a visitor activates the theme toggle
- **THEN** all sections, the navigation bar, and the case-study dialog are displayed using the dark theme without a page reload

#### Scenario: Switch from dark to light
- **WHEN** the page is displayed in the dark theme and a visitor activates the theme toggle
- **THEN** the page is displayed using the light theme without a page reload

#### Scenario: Control reflects current state
- **WHEN** the theme changes
- **THEN** the toggle's icon and its accessible name update to describe the action it will perform

#### Scenario: Available on mobile
- **WHEN** the viewport is narrower than the tablet breakpoint and the mobile menu is collapsed
- **THEN** the theme toggle is still visible and operable

#### Scenario: Navigation bar still fits
- **WHEN** the navigation bar is displayed at any supported viewport width with the toggle present
- **THEN** the brand, links, theme toggle, and resume action do not overlap or overflow horizontally, and existing navigation behaviour (scroll-spy, mobile menu, Escape to close) is unchanged

### Requirement: Default follows system preference
When the visitor has made no explicit choice, the site SHALL display the theme matching their operating-system `prefers-color-scheme` setting.

#### Scenario: First visit with dark OS setting
- **WHEN** a visitor with a dark system preference and no stored choice opens the site
- **THEN** the dark theme is displayed

#### Scenario: System setting changes without a stored choice
- **WHEN** the visitor has no stored choice and changes their system theme while the page is open
- **THEN** the page switches to the new system theme

### Requirement: Choice persists
The site SHALL remember a visitor's explicit theme choice in the browser and apply it on subsequent visits, overriding the system preference.

#### Scenario: Return visit
- **WHEN** a visitor who chose the light theme (with a dark system preference) reloads or revisits the site
- **THEN** the light theme is displayed

#### Scenario: Storage unavailable
- **WHEN** browser storage is blocked or throws an error
- **THEN** the toggle still works for the current page view, the site follows the system preference on the next load, and no error is shown to the visitor

#### Scenario: Invalid stored value
- **WHEN** the stored value is neither `light` nor `dark`
- **THEN** it is ignored and the system preference is used

### Requirement: No flash of incorrect theme
The site SHALL apply the resolved theme before the first paint so that visitors never see the wrong theme briefly on load.

#### Scenario: Reload with stored dark choice on a light system
- **WHEN** the page loads
- **THEN** the first rendered frame already uses the dark theme

### Requirement: Accessible theme control
The theme toggle SHALL be a native button operable by keyboard and assistive technology, with a visible focus indicator and a touch target of at least 44×44 CSS pixels.

#### Scenario: Keyboard operation
- **WHEN** a keyboard user focuses the toggle and presses Enter or Space
- **THEN** the theme switches and focus remains on the toggle

#### Scenario: Screen reader announcement
- **WHEN** a screen reader user reaches the toggle
- **THEN** it is announced as a button whose name identifies the action, for example "Switch to dark theme"

### Requirement: Both themes meet contrast and motion guarantees
Both themes SHALL meet WCAG 2.1 AA contrast for text and interactive elements, and the switch animation SHALL be disabled when the visitor prefers reduced motion.

#### Scenario: Contrast in both themes
- **WHEN** any text or control is rendered in either theme
- **THEN** its contrast against its background is at least 4.5:1 (3:1 for large text and UI boundaries)

#### Scenario: Reduced motion
- **WHEN** `prefers-reduced-motion: reduce` is set and the visitor toggles the theme
- **THEN** the colours change instantly with no transition

### Requirement: Browser chrome matches theme
The site SHALL keep the `theme-color` and `color-scheme` values aligned with the active theme.

#### Scenario: Native controls
- **WHEN** the dark theme is active
- **THEN** scrollbars and native form controls render in their dark variants
