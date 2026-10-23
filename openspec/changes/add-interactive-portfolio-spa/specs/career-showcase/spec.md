# Spec Delta

## Purpose

Presents Sakshi Walia's professional impact: headline metrics, her experience timeline at EssenceMediacom | WPP Media, and interactive case studies for each Dell initiative she delivered.

## ADDED Requirements

### Requirement: Headline impact metrics
The Impact section SHALL display key outcomes from the resume as prominent figures with short labels: brand health +4–5 percentage points, Dell Alienware ranked #4 → #2 in category, ROAS +30–40% from market prioritization, and 20+ award wins.

#### Scenario: Metrics displayed
- **WHEN** the Impact section is visible
- **THEN** each metric is shown with its figure, a one-line label, and the initiative it came from

#### Scenario: Metrics readable without animation
- **WHEN** the visitor prefers reduced motion or has scripting-driven animation unavailable
- **THEN** the final metric values are shown immediately and are fully readable

### Requirement: Experience timeline
The Experience section SHALL show the role "Business Executive – Strategy and Insights" at EssenceMediacom | WPP Media, Bangalore, October 2021 – September 2023, with a summary of responsibilities drawn from the resume.

#### Scenario: Role details
- **WHEN** a visitor views the Experience section
- **THEN** the title, employer, location, and date range exactly match the resume

#### Scenario: Responsibilities summary
- **WHEN** a visitor views the role
- **THEN** the responsibilities (trend monitoring and knowledge sharing, integrated multi-channel campaign collaboration, large-scale data analysis, award submissions) are listed concisely

### Requirement: Dell case-study cards
The Experience section SHALL present one case-study card per initiative: Alienware GTM, MMM-based channel strategy, Dell Futurist growth strategy, Dell for Bharat, market prioritization framework, Fractional Attribution Model, and WPP Media award submissions.

#### Scenario: Card summary
- **WHEN** the case-study cards are listed
- **THEN** each shows its title, a one-line summary, relevant skill tags, and its headline outcome where the resume provides one

#### Scenario: Card without a stated metric
- **WHEN** an initiative has no quantified result in the resume
- **THEN** the card describes the approach and contribution without displaying a number

### Requirement: Expandable case-study detail
A visitor SHALL be able to open any case-study card to read a Challenge → Approach → Outcome breakdown limited to facts supported by the resume.

#### Scenario: Open a case study
- **WHEN** a visitor clicks or presses Enter/Space on a case-study card
- **THEN** its detail view opens with focus moved into it and the rest of the page not interactive behind it

#### Scenario: Close a case study
- **WHEN** the visitor presses Escape, activates the close control, or clicks outside the detail view
- **THEN** it closes and focus returns to the card that opened it

#### Scenario: Browse between case studies
- **WHEN** a detail view is open
- **THEN** the visitor can move to the next or previous case study without closing it first

### Requirement: Case-study filtering by theme
The Experience section SHALL let visitors filter case studies by theme (for example Brand & GTM, Media & Analytics, Audience & Growth, Recognition).

#### Scenario: Apply a filter
- **WHEN** a visitor selects a theme
- **THEN** only matching case studies remain visible, the active filter is indicated, and the number of results is announced to assistive technology

#### Scenario: Clear the filter
- **WHEN** a visitor selects "All"
- **THEN** every case study is shown again

### Requirement: Awards recognition
The site SHALL highlight that Sakshi led award submissions contributing to 20+ wins across EMVIES, MMA Smarties, Goa Fest, ET Media Strategy Awards, and others, without claiming individual awards the resume does not state.

#### Scenario: Award wording
- **WHEN** awards are displayed
- **THEN** the text states she led the submissions for WPP Media (Dell) that contributed to the wins, and lists only the award bodies named in the resume
