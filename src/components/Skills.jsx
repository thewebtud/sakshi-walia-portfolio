import { useMemo, useState } from 'react'
import { AnimatePresence } from 'motion/react'
import * as m from 'motion/react-m'
import { caseStudies, skillCategories, skills } from '../data/index.js'
import { useCaseStudy } from './caseStudyContext.js'
import { ArrowRightIcon } from './ui/Icons.jsx'
import Reveal from './ui/Reveal.jsx'
import SectionHeading from './ui/SectionHeading.jsx'
import './Skills.css'

const relatedBySkill = caseStudies.reduce((map, study) => {
  study.skills.forEach((id) => map.set(id, [...(map.get(id) ?? []), study]))
  return map
}, new Map())

export default function Skills() {
  const { openCaseStudy } = useCaseStudy()
  const [category, setCategory] = useState('all')
  const [selected, setSelected] = useState(null)

  const groups = useMemo(
    () =>
      skillCategories
        .filter((item) => category === 'all' || item.id === category)
        .map((item) => ({ ...item, items: skills.filter((skill) => skill.category === item.id) })),
    [category],
  )

  const selectedSkill = skills.find((skill) => skill.id === selected)
  const related = selectedSkill ? (relatedBySkill.get(selectedSkill.id) ?? []) : []
  const showingSelected = selectedSkill && groups.some((group) => group.id === selectedSkill.category)

  const chooseCategory = (id) => {
    setCategory(id)
    setSelected(null)
  }

  return (
    <section id="skills" className="section section--alt skills" aria-labelledby="skills-title">
      <div className="container">
        <SectionHeading
          id="skills-title"
          eyebrow="Skills & tools"
          title=""
          intro=""
        />

        <Reveal className="skills__filters" role="group" aria-label="Filter skills by category">
          {[{ id: 'all', label: 'All' }, ...skillCategories].map((item) => (
            <button
              key={item.id}
              type="button"
              className="chip-button"
              aria-pressed={category === item.id}
              onClick={() => chooseCategory(item.id)}
            >
              {item.label}
            </button>
          ))}
        </Reveal>

        <div className="skills__groups">
          <AnimatePresence mode="popLayout" initial={false}>
            {groups.map((group) => (
              <m.section
                key={group.id}
                layout
                className="skills__group"
                aria-labelledby={`skills-${group.id}`}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              >
                <h3 id={`skills-${group.id}`} className="skills__group-title">
                  {group.label}
                </h3>
                <ul className="skills__list">
                  {group.items.map((skill) => {
                    const count = relatedBySkill.get(skill.id)?.length ?? 0
                    return (
                      <li key={skill.id}>
                        {count > 0 ? (
                          <button
                            type="button"
                            className="chip-button skills__chip skills__chip--linked"
                            aria-expanded={selected === skill.id}
                            aria-controls="skill-related"
                            onClick={() => setSelected(selected === skill.id ? null : skill.id)}
                          >
                            {skill.label}
                            <span className="skills__count" aria-label={`${count} related case ${count === 1 ? 'study' : 'studies'}`}>
                              {count}
                            </span>
                          </button>
                        ) : (
                          <span className="skills__chip">{skill.label}</span>
                        )}
                      </li>
                    )
                  })}
                </ul>
              </m.section>
            ))}
          </AnimatePresence>
        </div>

        <div id="skill-related" className="skills__related" aria-live="polite">
          <AnimatePresence initial={false}>
            {showingSelected && related.length > 0 && (
              <m.div
                key={selectedSkill.id}
                className="skills__related-card"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="skills__related-inner">
                  <p className="skills__related-title">
                    <strong>{selectedSkill.label}</strong> was used in:
                  </p>
                  <ul>
                    {related.map((study) => (
                      <li key={study.id}>
                        <button
                          type="button"
                          className="skills__related-link"
                          onClick={() => openCaseStudy(study.id, related.map((item) => item.id))}
                        >
                          {study.title}
                          <ArrowRightIcon />
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </m.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
