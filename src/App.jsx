import { useEffect } from 'react'
import { LazyMotion, MotionConfig } from 'motion/react'
import About from './components/About.jsx'
import CaseStudyProvider from './components/CaseStudyProvider.jsx'
import Contact from './components/Contact.jsx'
import Education from './components/Education.jsx'
import Experience from './components/Experience.jsx'
import Footer from './components/Footer.jsx'
import Hero from './components/Hero.jsx'
import Impact from './components/Impact.jsx'
import Navbar from './components/Navbar.jsx'
import Skills from './components/Skills.jsx'
import ScrollProgress from './components/ui/ScrollProgress.jsx'
import SectionBoundary from './components/ui/SectionBoundary.jsx'

const loadFeatures = () => import('./motionFeatures.js').then((module) => module.default)

export default function App() {
  useEffect(() => {
    const { hash } = window.location
    if (hash.length > 1) {
      document.getElementById(decodeURIComponent(hash.slice(1)))?.scrollIntoView()
    }
  }, [])

  return (
    <MotionConfig reducedMotion="user">
      <LazyMotion features={loadFeatures} strict>
        <CaseStudyProvider>
          <a className="skip-link" href="#main">
            Skip to content
          </a>
          <ScrollProgress />
          <Navbar />
          <main id="main" tabIndex={-1}>
            <SectionBoundary name="Introduction">
              <Hero />
            </SectionBoundary>
            <SectionBoundary name="About">
              <About />
            </SectionBoundary>
            <SectionBoundary name="Impact">
              <Impact />
            </SectionBoundary>
            <SectionBoundary name="Experience">
              <Experience />
            </SectionBoundary>
            <SectionBoundary name="Skills">
              <Skills />
            </SectionBoundary>
            <SectionBoundary name="Education">
              <Education />
            </SectionBoundary>
            <SectionBoundary name="Contact">
              <Contact />
            </SectionBoundary>
          </main>
          <Footer />
        </CaseStudyProvider>
      </LazyMotion>
    </MotionConfig>
  )
}
