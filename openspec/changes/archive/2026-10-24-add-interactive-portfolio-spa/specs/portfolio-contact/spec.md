# Spec Delta

## Purpose

Gives recruiters and prospective clients a frictionless way to contact Sakshi Walia, download her resume, and find her professional profiles.

## ADDED Requirements

### Requirement: Contact options
The Contact section SHALL provide her email (sakshiwaliaa10@gmail.com) as a `mailto:` link, her phone (+91 8446779559) as a `tel:` link, and her location (Gurugram, India).

#### Scenario: Email action
- **WHEN** a visitor activates the email action
- **THEN** their mail client opens with a new message addressed to her and a pre-filled subject

#### Scenario: Copy email
- **WHEN** a visitor activates the "copy email" control
- **THEN** the address is copied to the clipboard and a confirmation is shown and announced to assistive technology

#### Scenario: Clipboard unavailable
- **WHEN** copying to the clipboard fails
- **THEN** the address remains visible and selectable and the visitor is told the copy did not succeed

### Requirement: Resume download
The Contact section and the navigation SHALL offer the resume as a PDF download that is always the current `Sakshi_Walia.pdf`.

#### Scenario: Download from Contact
- **WHEN** a visitor activates the resume download in the Contact section
- **THEN** the PDF downloads and opens without error

#### Scenario: Download from navigation
- **WHEN** a visitor activates the resume action in the navigation bar
- **THEN** the same PDF is downloaded

### Requirement: Professional profile link
The Contact section SHALL link to her LinkedIn profile, opening in a new tab with safe link attributes, once the profile URL is supplied; until then the link MUST NOT be shown with a guessed URL.

#### Scenario: URL configured
- **WHEN** a LinkedIn URL is present in the site's content configuration
- **THEN** a LinkedIn link is displayed that opens the profile in a new tab and does not give the target page access to the opener

#### Scenario: URL not configured
- **WHEN** no LinkedIn URL is configured
- **THEN** no LinkedIn link is rendered and no broken or placeholder link is visible to visitors

### Requirement: Closing call to action
The Contact section SHALL close the page with a clear invitation to connect about opportunities, referencing her focus areas, and the primary action SHALL be reachable by keyboard.

#### Scenario: Call to action visible
- **WHEN** the visitor reaches the end of the page
- **THEN** an invitation heading, a primary "Email me" action, and a secondary "Download Resume" action are visible

### Requirement: No data collection
The site MUST NOT collect, store, or transmit visitor personal data, and MUST NOT load third-party tracking scripts.

#### Scenario: Network activity
- **WHEN** the site is loaded and used
- **THEN** it makes no requests to third-party analytics or advertising hosts and sets no tracking cookies
