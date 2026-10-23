import { caseStudies, education, links, metrics, profile, skillCategories, skills, themes } from '../src/data/index.js'

// Skills exactly as listed in Sakshi_Walia.pdf (Key Skills + Tools & Platforms).
const resumeSkills = [
  'GTM Strategy', 'Growth Strategy', 'Consumer Insights', 'Market Research', 'Branding', 'Campaign Planning',
  'Marketing Analytics', 'Stakeholder Management', 'Cross-functional Collaboration', 'Data-driven Storytelling',
  'Competitive Intelligence', 'Market Sizing', 'Strategic Planning',
  'Power BI', 'SQL', 'R', 'Google Analytics (GA4)', 'Meta', 'Nielsen', 'GWI', 'WARC', 'eMarketer',
  'Google Cloud Platform (GCP)', 'DV360', 'Google Trends', 'MS Excel', 'MS PowerPoint', 'MS Word',
  'ChatGPT', 'Claude', 'Gemini',
]

const errors = []
const fail = (message) => errors.push(message)

const unique = (items, name) => {
  const seen = new Set()
  for (const { id } of items) {
    if (seen.has(id)) fail(`Duplicate ${name} id: ${id}`)
    seen.add(id)
  }
  return seen
}

const skillIds = unique(skills, 'skill')
const caseIds = unique(caseStudies, 'case study')
const categoryIds = unique(skillCategories, 'skill category')
const themeIds = unique(themes, 'theme')
unique(metrics, 'metric')
unique(education, 'education')

for (const skill of skills) {
  if (!categoryIds.has(skill.category)) fail(`Skill "${skill.id}" has unknown category "${skill.category}"`)
}

const labelCounts = new Map()
for (const { label } of skills) labelCounts.set(label, (labelCounts.get(label) ?? 0) + 1)
for (const label of resumeSkills) {
  const count = labelCounts.get(label) ?? 0
  if (count !== 1) fail(`Resume skill "${label}" appears ${count} times (expected exactly 1)`)
}
for (const { label } of skills) {
  if (!resumeSkills.includes(label)) fail(`Skill "${label}" is not listed in the resume`)
}

const requiredCaseFields = ['title', 'theme', 'summary', 'challenge', 'approach', 'outcome', 'skills']
for (const study of caseStudies) {
  for (const field of requiredCaseFields) {
    if (!study[field] || (Array.isArray(study[field]) && study[field].length === 0 && field !== 'skills')) {
      fail(`Case study "${study.id}" is missing "${field}"`)
    }
  }
  if (!themeIds.has(study.theme)) fail(`Case study "${study.id}" has unknown theme "${study.theme}"`)
  for (const skillId of study.skills ?? []) {
    if (!skillIds.has(skillId)) fail(`Case study "${study.id}" references unknown skill "${skillId}"`)
  }
}

for (const metric of metrics) {
  if (!caseIds.has(metric.caseStudyId)) fail(`Metric "${metric.id}" references unknown case study "${metric.caseStudyId}"`)
}

if (!profile.email || !profile.resumeUrl) fail('Profile is missing email or resumeUrl')
if (links.linkedin !== null && !/^https:\/\//.test(links.linkedin)) fail('links.linkedin must be null or an https URL')

if (errors.length) {
  console.error(`Content check failed:\n- ${errors.join('\n- ')}`)
  process.exit(1)
}
console.log(`Content check passed: ${skills.length} skills, ${caseStudies.length} case studies, ${metrics.length} metrics.`)
