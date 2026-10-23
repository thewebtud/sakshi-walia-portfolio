import { additional, education } from '../data/index.js'
import Reveal from './ui/Reveal.jsx'
import SectionHeading from './ui/SectionHeading.jsx'
import './Education.css'

export default function Education() {
  return (
    <section id="education" className="section education" aria-labelledby="education-title">
      <div className="container">
        <SectionHeading
          id="education-title"
          eyebrow="Education"
          title="Built on marketing, analytics and curiosity."
        />

        <ol className="edu__list">
          {education.map((item, index) => (
            <Reveal as="li" key={item.id} delay={0.08 * index} className="edu__item">
              <span className="edu__dates">
                {item.start} – {item.end}
              </span>
              <div className="edu__card">
                <h3 className="edu__degree">{item.degree}</h3>
                <p className="edu__school">
                  {item.institution} · {item.location}
                </p>
              </div>
            </Reveal>
          ))}
        </ol>

        <h3 className="edu__more-title">Beyond the day job</h3>
        <ul className="edu__more">
          {additional.map((item, index) => (
            <Reveal as="li" key={item.id} delay={0.08 * index} className="edu__more-item">
              <h4>{item.title}</h4>
              <p>{item.description}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
