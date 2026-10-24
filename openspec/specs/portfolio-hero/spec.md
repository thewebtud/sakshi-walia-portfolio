# portfolio-hero Specification

## Purpose
Defines the first impression of the portfolio: an animated hero and About summary that immediately tell recruiters who Sakshi Walia is, what she does, and how to act on it.

## Requirements

### Requirement: Hero identity and positioning
The hero SHALL display the name "Sakshi Walia", her professional positioning (Strategy & Insights; Market Research; Consumer Insights), her location (Gurugram, India), and her photograph.

#### Scenario: Above-the-fold content
- **WHEN** the page finishes loading on a 1366×768 desktop or a 390×844 phone
- **THEN** the name, positioning line, photograph, and both primary actions are visible without scrolling

#### Scenario: Single top-level heading
- **WHEN** the hero is rendered
- **THEN** the name is the page's only `h1` and the photograph has alt text describing Sakshi Walia

### Requirement: Rotating specialisation highlight
The hero SHALL cycle through her core focus areas (such as GTM Strategy, Growth Strategy, Consumer Insights, Marketing Analytics) in an animated headline without hiding the full list from assistive technology.

#### Scenario: Cycling text
- **WHEN** the hero has been visible for several seconds
- **THEN** the highlighted focus area changes automatically to the next one in the list

#### Scenario: Reduced motion or assistive tech
- **WHEN** the visitor prefers reduced motion or uses a screen reader
- **THEN** the focus areas are shown as a static list and no live-region announcements repeat

### Requirement: Primary calls to action
The hero SHALL offer a "Download Resume" action and a "Get in touch" action that are visually prominent and keyboard accessible.

#### Scenario: Download resume
- **WHEN** a visitor activates "Download Resume"
- **THEN** the browser downloads the resume PDF named for Sakshi Walia

#### Scenario: Get in touch
- **WHEN** a visitor activates "Get in touch"
- **THEN** the page scrolls to the Contact section

### Requirement: Interactive photograph treatment
The hero photograph SHALL respond to pointer movement or touch with a subtle effect that does not obscure the image, and SHALL remain static for visitors who prefer reduced motion.

#### Scenario: Pointer interaction
- **WHEN** a visitor moves the pointer over the photograph on a device with a pointer
- **THEN** the photograph or its surrounding decoration shifts subtly in response

#### Scenario: Touch device
- **WHEN** the page is used on a touch-only device
- **THEN** the photograph is displayed without depending on hover and without requiring any gesture

### Requirement: About summary
The About section SHALL present her summary from the resume — two years of experience in market research, consumer insights, and data analytics, translating data into actionable recommendations and measurable business impact — in scannable form with supporting facts.

#### Scenario: Scannable summary
- **WHEN** a visitor reads the About section
- **THEN** it shows a short narrative of no more than about 80 words plus highlight facts (years of experience, current focus, education headline, location)

#### Scenario: Faithful to resume
- **WHEN** the About content is compared to the resume summary
- **THEN** it conveys the same claims and adds no unverified ones
