# portfolio-shell Specification

## REMOVED Requirements

### Requirement: System colour-scheme preference
**Reason**: The site uses one fixed theme and no longer adapts to the visitor's light/dark system preference; the previous dark-only change already contradicted this requirement.
**Migration**: Use the "Light pastel theme is the only theme" and "Pastel palette with ink text" requirements in `pastel-theme`, which keep the AA contrast guarantee.
