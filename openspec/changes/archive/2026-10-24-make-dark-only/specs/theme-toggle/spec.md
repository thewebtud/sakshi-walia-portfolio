# Spec Delta

## REMOVED Requirements

### Requirement: Theme toggle control
**Reason**: The site is dark-only; there is no light theme to switch to (see `dark-theme`).
**Migration**: None. The navbar no longer shows a theme toggle.

### Requirement: Default follows system preference
**Reason**: The site always uses the dark theme regardless of the OS `prefers-color-scheme` setting.
**Migration**: Covered by `dark-theme` "Dark theme is the only theme".

### Requirement: Choice persists
**Reason**: There is no user choice to persist; stale stored values are ignored and removed.
**Migration**: Covered by `dark-theme` "Dark theme is the only theme".

### Requirement: No flash of incorrect theme
**Reason**: Dark is the static CSS default, so no pre-paint script is needed.
**Migration**: Covered by `dark-theme` "Dark theme is the only theme".

### Requirement: Accessible theme control
**Reason**: The control no longer exists.
**Migration**: None.

### Requirement: Both themes meet contrast and motion guarantees
**Reason**: Only one theme remains and there is no switch animation.
**Migration**: Covered by `dark-theme` "Dark theme meets contrast and motion guarantees".

### Requirement: Browser chrome matches theme
**Reason**: `color-scheme` and `theme-color` are now fixed to dark.
**Migration**: Covered by `dark-theme` "Browser chrome matches dark theme".
