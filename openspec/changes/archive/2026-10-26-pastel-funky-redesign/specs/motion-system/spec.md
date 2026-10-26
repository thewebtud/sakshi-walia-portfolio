# motion-system Specification

## ADDED Requirements

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
