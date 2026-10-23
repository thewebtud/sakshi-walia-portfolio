# Spec Delta

## Purpose

Defines the single-page frame of Sakshi Walia's portfolio: how visitors navigate it, how it adapts to devices, and the accessibility, SEO, performance, and content-integrity guarantees every section inherits.

## ADDED Requirements

### Requirement: Single-page section layout
The site SHALL present the portfolio as one page containing, in order, the sections Hero, About, Impact, Experience, Skills, Education, and Contact, without full page reloads when moving between them.

#### Scenario: All sections reachable
- **WHEN** a visitor scrolls from the top to the bottom of the page
- **THEN** each of the seven sections is displayed in the stated order

#### Scenario: Deep link to a section
- **WHEN** a visitor opens the site with a section anchor in the URL (for example `#experience`)
- **THEN** the page scrolls to that section and its heading is not hidden behind the navigation bar

### Requirement: Sticky navigation with active-section indicator
The site SHALL provide a navigation bar that remains visible while scrolling and highlights the link of the section currently in view.

#### Scenario: Navigate by link
- **WHEN** a visitor activates a navigation link
- **THEN** the page smoothly scrolls to the corresponding section and the link is shown as active

#### Scenario: Scroll updates active link
- **WHEN** a visitor scrolls so that a different section occupies most of the viewport
- **THEN** the navigation highlights that section's link and no other

#### Scenario: Mobile navigation
- **WHEN** the viewport is narrower than a tablet breakpoint
- **THEN** the navigation collapses into a toggle control that opens a full list of links, closes after a link is chosen, and can be dismissed with the Escape key

### Requirement: Content sourced from the resume
All factual content (employer, titles, dates, skills, education, metrics, and award counts) SHALL match `Sakshi_Walia.pdf`, and the site MUST NOT display invented employers, metrics, testimonials, or credentials.

#### Scenario: Metrics traceable to the resume
- **WHEN** a numeric claim is displayed (for example "+30–40% ROAS")
- **THEN** the same figure appears in the resume

#### Scenario: Missing information is a labelled placeholder
- **WHEN** required information is not in the resume (for example a LinkedIn URL)
- **THEN** the item is either omitted from the page or visibly marked as a placeholder, never filled with fabricated data

### Requirement: Responsive layout
The site SHALL render without horizontal scrolling or overlapping content at viewport widths from 320 px to 1920 px.

#### Scenario: Phone viewport
- **WHEN** the page is viewed at 360 px width
- **THEN** all text is readable without zooming, tap targets are at least 44×44 px, and no horizontal scrollbar appears

#### Scenario: Wide viewport
- **WHEN** the page is viewed at 1920 px width
- **THEN** content stays within a readable maximum width and remains centred

### Requirement: Accessibility baseline
The site SHALL meet WCAG 2.1 AA: semantic landmarks and heading order, full keyboard operability with a visible focus indicator, text contrast of at least 4.5:1, descriptive alt text for informative images, and a skip-to-content link.

#### Scenario: Keyboard-only use
- **WHEN** a visitor uses only the Tab, Shift+Tab, Enter, Space, and Escape keys
- **THEN** every interactive element can be reached and operated, focus is always visible, and no keyboard trap exists

#### Scenario: Skip link
- **WHEN** a keyboard user presses Tab on page load
- **THEN** a "Skip to content" link receives focus and activating it moves focus to the main content

#### Scenario: Screen reader structure
- **WHEN** the page is read by a screen reader
- **THEN** it exposes one `h1`, section headings in logical order, and labelled navigation and main landmarks

### Requirement: Search and social metadata
The site SHALL set a descriptive page title, meta description, Open Graph and Twitter card tags (title, description, image), a language attribute, and a favicon appropriate to Sakshi Walia's portfolio.

#### Scenario: Link preview
- **WHEN** the site URL is shared on a platform that reads Open Graph tags
- **THEN** the preview shows her name, role positioning, a description, and an image

#### Scenario: Page title
- **WHEN** the page loads
- **THEN** the browser tab title includes "Sakshi Walia" and her professional focus rather than the template default

### Requirement: Performance budget
The production build SHALL load quickly on a mid-range mobile device over a typical 4G connection, with a Lighthouse performance score of at least 90 and no layout shift caused by images or fonts.

#### Scenario: Optimised photograph
- **WHEN** the hero photograph is requested
- **THEN** a resized, compressed version in a modern format is served, appropriate to the viewport width, and the original multi-megabyte file is not downloaded

#### Scenario: No layout shift
- **WHEN** images and fonts finish loading
- **THEN** surrounding content does not move

### Requirement: System colour-scheme preference
The site SHALL adopt a colour theme that matches the visitor's system light/dark preference while keeping all text and controls at AA contrast in both themes.

#### Scenario: Dark system preference
- **WHEN** the visitor's system preference is dark
- **THEN** the site renders its dark theme on first paint without a flash of the light theme

### Requirement: Graceful behaviour without scripting errors
The site SHALL show a meaningful fallback if a section fails to render, and the base HTML MUST include a `noscript` message with the resume download link and contact email.

#### Scenario: JavaScript disabled
- **WHEN** the page is opened with JavaScript disabled
- **THEN** the visitor sees a message with a link to download the resume and an email contact
