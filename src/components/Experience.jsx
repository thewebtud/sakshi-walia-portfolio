import { useMemo, useRef, useState } from 'react'
import { AnimatePresence, useReducedMotion, useScroll, useSpring } from 'motion/react'
import * as m from 'motion/react-m'
import { awardBodies, caseStudies, experience, themes } from '../data/index.js'
import CaseStudyCard from './CaseStudyCard.jsx'
import { useCaseStudy } from './caseStudyContext.js'
import Reveal from './ui/Reveal.jsx'
import SectionHeading from './ui/SectionHeading.jsx'
import './Experience.css'

export default function Experience() {
  const { openCaseStudy } = useCaseStudy()
  const [theme, setTheme] = useState('all')
  const timelineRef = useRef(null)
  const reduce = useReducedMotion()

  const { scrollYProgress } = useScroll({ target: timelineRef, offset: ['start 75%', 'end 60%'] })
  const line = useSpring(scrollYProgress, { stiffness: 120, damping: 26 })

  const visible = useMemo(
    () => (theme === 'all' ? caseStudies : caseStudies.filter((study) => study.theme === theme)),
    [theme],
  )
  const visibleIds = useMemo(() => visible.map((study) => study.id), [visible])

  return (
    <section id="experience" className="section experience" aria-labelledby="experience-title">
      <div className="container">
        <SectionHeading
          id="experience-title"
          eyebrow="Experience & case studies"
          title="Strategy that shows up in the numbers."
          intro="Two years of turning research, analytics and storytelling into growth for one of the world’s best-known technology brands."
        />

        <div ref={timelineRef} className="timeline">
          <div className="timeline__rail" aria-hidden="true">
            <m.span className="timeline__line" style={{ scaleY: reduce ? 1 : line }} />
          </div>
          <Reveal className="timeline__item">
            <span className="timeline__dot" aria-hidden="true" />
            <div className="timeline__card">
              <p className="timeline__dates">
                {experience.start} – {experience.end}
              </p>
              <h3 className="timeline__title">{experience.title}</h3>
              <p className="timeline__company">
                {experience.company} · {experience.location}
              </p>
              <ul className="timeline__list">
                {experience.responsibilities.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        <Reveal className="cases__head">
          <h3 className="cases__title">Case studies</h3>
          <div className="cases__filters" role="group" aria-label="Filter case studies by theme">
            {[{ id: 'all', label: 'All' }, ...themes].map((item) => (
              <button
                key={item.id}
                type="button"
                className="chip-button"
                aria-pressed={theme === item.id}
                onClick={() => setTheme(item.id)}
              >
                {item.label}
              </button>
            ))}
          </div>
          <p className="sr-only" role="status">
            Showing {visible.length} of {caseStudies.length} case studies
          </p>
        </Reveal>

        <ul className="cases__grid">
          <AnimatePresence mode="popLayout">
            {visible.map((study) => (
              <CaseStudyCard key={study.id} study={study} onOpen={() => openCaseStudy(study.id, visibleIds)} />
            ))}
          </AnimatePresence>
        </ul>

        <Reveal className="awards">
          <div>
            <h3 className="awards__title">Recognition</h3>
            <p>
              Led end-to-end award submissions for WPP Media (Dell), contributing to <strong>20+ wins</strong> across:
            </p>
          </div>
          <ul className="awards__list" aria-label="Award bodies">
            {awardBodies.map((name) => (
              <li key={name}>{name}</li>
            ))}
            <li>and more</li>
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
