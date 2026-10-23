import { useRef } from 'react'
import { useMotionValue, useReducedMotion, useSpring } from 'motion/react'
import * as m from 'motion/react-m'
import { skills, themes } from '../data/index.js'
import { ArrowRightIcon } from './ui/Icons.jsx'

const themeLabel = new Map(themes.map((theme) => [theme.id, theme.label]))
const skillLabel = new Map(skills.map((skill) => [skill.id, skill.label]))

export default function CaseStudyCard({ study, onOpen }) {
  const reduce = useReducedMotion()
  const ref = useRef(null)
  const rx = useMotionValue(0)
  const ry = useMotionValue(0)
  const rotateX = useSpring(rx, { stiffness: 220, damping: 22 })
  const rotateY = useSpring(ry, { stiffness: 220, damping: 22 })

  const onPointerMove = (event) => {
    if (reduce || event.pointerType !== 'mouse') return
    const rect = ref.current.getBoundingClientRect()
    ry.set(((event.clientX - rect.left) / rect.width - 0.5) * 7)
    rx.set(-((event.clientY - rect.top) / rect.height - 0.5) * 7)
  }
  const reset = () => {
    rx.set(0)
    ry.set(0)
  }

  return (
    <m.li
      layout
      className="case-card"
      initial={{ opacity: 0, scale: 0.94 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.94 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
    >
      <m.button
        ref={ref}
        type="button"
        className="case-card__button"
        style={reduce ? undefined : { rotateX, rotateY, transformPerspective: 900 }}
        onPointerMove={onPointerMove}
        onPointerLeave={reset}
        onClick={onOpen}
        aria-haspopup="dialog"
      >
        <span className="case-card__theme">{themeLabel.get(study.theme)}</span>
        <span className="case-card__title">{study.title}</span>
        <span className="case-card__summary">{study.summary}</span>
        {study.metric && (
          <span className="case-card__metric">
            <strong>{study.metric}</strong> {study.metricLabel}
          </span>
        )}
        <span className="case-card__tags">
          {study.skills.slice(0, 3).map((id) => (
            <span key={id}>{skillLabel.get(id)}</span>
          ))}
        </span>
        <span className="case-card__cta">
          Read case study
          <ArrowRightIcon />
        </span>
      </m.button>
    </m.li>
  )
}
