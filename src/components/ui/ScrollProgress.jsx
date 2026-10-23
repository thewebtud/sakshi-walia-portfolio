import { useScroll, useSpring, useReducedMotion } from 'motion/react'
import * as m from 'motion/react-m'
import './ScrollProgress.css'

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const smooth = useSpring(scrollYProgress, { stiffness: 140, damping: 28, restDelta: 0.001 })
  const reduce = useReducedMotion()

  return <m.div className="scroll-progress" aria-hidden="true" style={{ scaleX: reduce ? scrollYProgress : smooth }} />
}
