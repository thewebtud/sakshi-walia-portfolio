# motion-system Specification

## Purpose
Defines the animation and interaction language of the portfolio so that the site feels polished and lively while remaining accessible, performant, and consistent across sections.

## Requirements

### Requirement: Page-load sequence
On first load the site SHALL play a short staged entrance (navigation, headline, photograph, calls to action) that completes within 2 seconds and never blocks interaction.

#### Scenario: Entrance plays
- **WHEN** the page first loads without a reduced-motion preference
- **THEN** hero elements animate into place in sequence and finish within 2 seconds

#### Scenario: Interaction during animation
- **WHEN** a visitor clicks a navigation link while the entrance is playing
- **THEN** the click is handled immediately

### Requirement: Scroll-triggered reveals
Section headings and content blocks SHALL animate into view as they enter the viewport, once per page visit, without causing layout shift.

#### Scenario: Reveal on scroll
- **WHEN** a content block enters the viewport for the first time
- **THEN** it fades and slides into its final position

#### Scenario: Content already in view
- **WHEN** a block is revisited after being revealed
- **THEN** it does not animate again

#### Scenario: Deep link target
- **WHEN** a visitor opens a deep link to a lower section
- **THEN** that section's content is visible without waiting on earlier sections' animations

### Requirement: Scroll progress and parallax accents
The site SHALL show a scroll progress indicator and subtle depth effects on decorative background shapes, never on body text.

#### Scenario: Progress indicator
- **WHEN** the visitor scrolls
- **THEN** the indicator reflects the proportion of the page scrolled

#### Scenario: Text stability
- **WHEN** depth effects are active
- **THEN** body text and controls keep fixed positions relative to their containers

### Requirement: Interactive micro-interactions
Buttons, cards, chips, and links SHALL give immediate visual feedback on hover, focus, and press, and card expansion and filtering SHALL animate between states.

#### Scenario: Hover and focus feedback
- **WHEN** a visitor hovers or keyboard-focuses an interactive element
- **THEN** it shows a distinct state change within 150 ms

#### Scenario: Filter transitions
- **WHEN** a filter is applied to case studies or skills
- **THEN** items that leave or enter animate rather than jump

### Requirement: Count-up numbers
Numeric metrics SHALL animate from zero to their final values when first revealed and MUST display the exact final value when the animation ends.

#### Scenario: Count completes
- **WHEN** the Impact section becomes visible
- **THEN** each figure counts up and ends on the exact value from the content (for example 20+)

### Requirement: Reduced-motion support
When the visitor's system requests reduced motion, the site MUST replace movement-based animation (parallax, sliding, cycling text, count-up, pointer tracking) with instant or simple opacity changes while keeping all content and functions available.

#### Scenario: Reduced motion enabled
- **WHEN** the system preference is reduced motion
- **THEN** no element moves, scales, or loops continuously and all content is visible immediately

#### Scenario: Preference changes live
- **WHEN** the preference changes while the page is open
- **THEN** the site adapts without a reload

### Requirement: Animation performance
Animations SHALL stay smooth (about 60 frames per second on a mid-range mobile device) and SHALL animate only compositor-friendly properties where practical.

#### Scenario: Smooth scrolling
- **WHEN** a visitor scrolls the full page on a mid-range mobile device
- **THEN** no sustained frame drops or main-thread blocking longer than 100 ms are observed in a performance profile

#### Scenario: Off-screen animations paused
- **WHEN** an animated element is outside the viewport
- **THEN** it does not run continuous animation

### Requirement: Playful motion accents
Buttons, chips, cards and decorative shapes SHALL use springy, slightly overshooting motion for hover, press and ambient movement, limited to `transform` and `opacity`, and ambient movement SHALL be restricted to decorative shapes.

#### Scenario: Bouncy feedback
- **WHEN** a visitor hovers, focuses or presses a button, chip or card
- **THEN** it responds with a short spring-style scale or rotation change that begins within 150 ms and settles in under 600 ms

#### Scenario: Ambient decoration
- **WHEN** hero or section decorative shapes are in the viewport
- **THEN** they drift or float gently, and when they leave the viewport they stop animating

#### Scenario: Reduced motion
- **WHEN** the system preference is reduced motion
- **THEN** tilts are removed or fixed, springs and floating are replaced by instant or opacity/colour changes, and all content and functions remain available

#### Scenario: Text stability
- **WHEN** playful motion is active
- **THEN** body text is never animated on its own and remains readable and in a fixed position relative to its container
