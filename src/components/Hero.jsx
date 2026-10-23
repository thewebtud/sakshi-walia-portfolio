import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, useInView, useMotionValue, useReducedMotion, useScroll, useSpring, useTransform } from 'motion/react'
import * as m from 'motion/react-m'
import { profile } from '../data/index.js'
import { photo } from '../assets/photo.js'
import { ArrowRightIcon, DownloadIcon, MapPinIcon } from './ui/Icons.jsx'
import './Hero.css'

const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } } }
const rise = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

function RotatingFocus({ active }) {
  const reduce = useReducedMotion()
  const [index, setIndex] = useState(0)
  const { focusAreas } = profile

  useEffect(() => {
    if (reduce || !active) return undefined
    const timer = setInterval(() => setIndex((value) => (value + 1) % focusAreas.length), 2600)
    return () => clearInterval(timer)
  }, [reduce, active, focusAreas.length])

  if (reduce) {
    return <p className="hero__focus">I work across {focusAreas.join(' · ')}</p>
  }

  return (
    <p className="hero__focus">
      <span className="sr-only">I work across {focusAreas.join(', ')}.</span>
      <span aria-hidden="true">
        I specialise in{' '}
        <span className="hero__rotator">
          <AnimatePresence mode="wait" initial={false}>
            <m.span
              key={focusAreas[index]}
              className="hero__rotator-word"
              initial={{ opacity: 0, y: '60%' }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: '-60%' }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              {focusAreas[index]}
            </m.span>
          </AnimatePresence>
        </span>
      </span>
    </p>
  )
}

export default function Hero() {
  const reduce = useReducedMotion()
  const sectionRef = useRef(null)
  const visualRef = useRef(null)
  const inView = useInView(sectionRef)

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end start'] })
  const blobY1 = useTransform(scrollYProgress, [0, 1], [0, 160])
  const blobY2 = useTransform(scrollYProgress, [0, 1], [0, -110])

  const px = useMotionValue(0)
  const py = useMotionValue(0)
  const sx = useSpring(px, { stiffness: 120, damping: 18 })
  const sy = useSpring(py, { stiffness: 120, damping: 18 })
  const photoX = useTransform(sx, (v) => v * -14)
  const photoY = useTransform(sy, (v) => v * -14)
  const frameX = useTransform(sx, (v) => v * 18)
  const frameY = useTransform(sy, (v) => v * 18)

  const onPointerMove = (event) => {
    if (reduce || event.pointerType !== 'mouse') return
    const rect = visualRef.current.getBoundingClientRect()
    px.set((event.clientX - rect.left) / rect.width - 0.5)
    py.set((event.clientY - rect.top) / rect.height - 0.5)
  }
  const onPointerLeave = () => {
    px.set(0)
    py.set(0)
  }

  return (
    <section id="home" ref={sectionRef} className="hero" aria-label="Introduction" data-paused={!inView}>
      <div className="hero__bg" aria-hidden="true">
        <m.span className="hero__blob hero__blob--one" style={reduce ? undefined : { y: blobY1 }} />
        <m.span className="hero__blob hero__blob--two" style={reduce ? undefined : { y: blobY2 }} />
        <span className="hero__grid" />
      </div>

      <div className="hero__inner container">
        <m.div className="hero__copy" variants={stagger} initial="hidden" animate="show">
          <m.p className="hero__eyebrow" variants={rise}>
            <span className="hero__pulse" aria-hidden="true" />
            {profile.headline}
            <span className="hero__location">
              <MapPinIcon />
              {profile.location}
            </span>
          </m.p>

          <m.h1 className="hero__name" variants={rise}>
            {profile.name}
          </m.h1>

          <m.div variants={rise}>
            <RotatingFocus active={inView} />
          </m.div>

          <m.p className="hero__tagline" variants={rise}>
            {profile.tagline}
          </m.p>

          <m.ul className="hero__tags" variants={rise} aria-label="Positioning">
            {profile.positioning.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </m.ul>

          <m.div className="hero__actions" variants={rise}>
            <a className="btn btn--primary" href={profile.resumeUrl} download={profile.resumeFileName}>
              <DownloadIcon />
              Download Resume
            </a>
            <a className="btn btn--ghost" href="#contact">
              Get in touch
              <ArrowRightIcon />
            </a>
          </m.div>
        </m.div>

        <m.div
          ref={visualRef}
          className="hero__visual"
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          onPointerMove={onPointerMove}
          onPointerLeave={onPointerLeave}
        >
          <m.span className="hero__frame" aria-hidden="true" style={reduce ? undefined : { x: frameX, y: frameY }} />
          <m.div className="hero__photo" style={reduce ? undefined : { x: photoX, y: photoY }}>
            <picture>
              <source type="image/avif" srcSet={photo.avif} sizes="(min-width: 60rem) 30rem, 85vw" />
              <source type="image/webp" srcSet={photo.webp} sizes="(min-width: 60rem) 30rem, 85vw" />
              <img
                src={photo.fallback}
                srcSet={photo.jpg}
                sizes="(min-width: 60rem) 30rem, 85vw"
                width={photo.size}
                height={photo.size}
                alt="Portrait of Sakshi Walia, smiling, wearing a black blazer in an office with a ‘Smart Strategy, Real Results’ sign behind her"
                fetchPriority="high"
                decoding="async"
              />
            </picture>
          </m.div>

          <div className="hero__chip hero__chip--one" aria-hidden="true">
            <strong>#4 → #2</strong>
            <span>Alienware category rank</span>
          </div>
          <div className="hero__chip hero__chip--two" aria-hidden="true">
            <strong>20+</strong>
            <span>award wins</span>
          </div>
        </m.div>
      </div>

      <a className="hero__scroll" href="#about" aria-label="Scroll to About">
        <span aria-hidden="true" />
      </a>
    </section>
  )
}
