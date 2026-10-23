import { useEffect, useRef, useState } from 'react'
import { animate, useInView, useReducedMotion } from 'motion/react'

const format = ({ prefix, numbers, separator, suffix }, progress) => {
  const values = numbers.map((n) => Math.round(n * progress))
  return `${prefix}${values.join(separator)}${suffix}`
}

export default function CountUp({ metric, className }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '0px 0px -10% 0px' })
  const reduce = useReducedMotion()
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    if (!inView || reduce) return undefined
    const controls = animate(0, 1, {
      duration: 1.6,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: setProgress,
    })
    return () => controls.stop()
  }, [inView, reduce])

  const finalText = format(metric, 1)
  return (
    <span ref={ref} className={className}>
      <span className="sr-only">{finalText}</span>
      <span aria-hidden="true">{reduce ? finalText : format(metric, progress)}</span>
    </span>
  )
}
