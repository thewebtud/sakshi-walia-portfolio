import { profile } from '../data/index.js'
import Reveal from './ui/Reveal.jsx'
import SectionHeading from './ui/SectionHeading.jsx'
import './About.css'

export default function About() {
  return (
    <section id="about" className="section about" aria-labelledby="about-title">
      <div className="container">
        <SectionHeading id="about-title" eyebrow="A little about me" title="" />
        <div className="about__grid">
          <Reveal className="about__summary">
            {profile.summary.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <ul className="about__tags" aria-label="Areas of focus">
              {profile.positioning.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Reveal>
          <ul className="about__facts">
            {profile.highlights.map((fact, index) => (
              <Reveal as="li" key={fact.label} delay={0.08 * index} className="about__fact">
                <span className="about__fact-label">{fact.label}</span>
                <span className="about__fact-value">{fact.value}</span>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
