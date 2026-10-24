# skills-and-credentials Specification

## Purpose
Shows what Sakshi Walia knows and where she studied: categorised skills and tools that visitors can explore, her education history, and additional leadership information.

## Requirements

### Requirement: Categorised skills display
The Skills section SHALL present all skills and tools in the resume grouped into categories: Strategy (GTM, Growth, Strategic Planning, Branding, Campaign Planning), Insights & Research (Consumer Insights, Market Research, Market Sizing, Competitive Intelligence), Analytics, Platforms & Data Sources, AI tools, and Working Style (Stakeholder Management, Cross-functional Collaboration, Data-driven Storytelling).

#### Scenario: Every resume skill shown
- **WHEN** the Skills section is compared with the resume's Key Skills and Tools & Platforms lists
- **THEN** every listed item appears in exactly one category and no unlisted skill is shown

#### Scenario: Categories labelled
- **WHEN** the Skills section is viewed
- **THEN** each category has a visible heading

### Requirement: Interactive skills exploration
Visitors SHALL be able to filter skills by category and see which case studies use a selected skill.

#### Scenario: Filter by category
- **WHEN** a visitor selects a category
- **THEN** only that category's skills are emphasised or shown and the selection is indicated visually and to assistive technology

#### Scenario: Skill linked to work
- **WHEN** a visitor activates a skill that is used in one or more case studies
- **THEN** the related case studies are listed and activating one navigates to it

#### Scenario: Skill without linked work
- **WHEN** a visitor activates a skill with no related case study
- **THEN** no empty or broken link is shown

### Requirement: No self-rated proficiency
The Skills section MUST NOT present percentage bars or numeric self-ratings, since the resume does not provide them.

#### Scenario: Skill presentation
- **WHEN** skills are displayed
- **THEN** they appear as labelled chips or similar without percentages or star ratings

### Requirement: Education timeline
The Education section SHALL list, most recent first, PGPM – Marketing and Analytics (SOIL Institute of Management, Gurugram, May 2024 – Apr 2025), PG Certification in Digital Marketing and Communications (MICA & upGrad, online, Sep 2020 – Aug 2021), and B.Tech. – Cosmetic Technology (Nagpur University, Nagpur, Jun 2016 – Apr 2020).

#### Scenario: Education order and accuracy
- **WHEN** the Education section is viewed
- **THEN** the three entries appear in reverse chronological order with institution, location, and dates matching the resume

#### Scenario: Responsive timeline
- **WHEN** viewed on a 360 px wide screen
- **THEN** the timeline stacks into a single readable column

### Requirement: Additional information and leadership
The site SHALL present her additional information: President of the Wellness Club at SOIL, Social Media Head of the Marketing Club at SOIL, and consistent on-time delivery that earned client trust.

#### Scenario: Leadership roles
- **WHEN** the additional information is displayed
- **THEN** both club roles are shown with a one-line description each, as given in the resume

#### Scenario: Reliability statement
- **WHEN** the reliability point is displayed
- **THEN** it is phrased as stated in the resume and not as a quoted client testimonial
