import { metrics } from '../data/index.js'
import { useCaseStudy } from './caseStudyContext.js'
import CountUp from './ui/CountUp.jsx'
import { ArrowRightIcon } from './ui/Icons.jsx'
import Reveal from './ui/Reveal.jsx'
import SectionHeading from './ui/SectionHeading.jsx'
import './Impact.css'

export default function Impact() {
  const { openCaseStudy } = useCaseStudy()

  return (
    <section id="impact" className="section section--alt impact" aria-labelledby="impact-title">
      <div className="container">
        <SectionHeading
          id="impact-title"
          eyebrow="Impact at a glance"
          title="Results that moved the needle."
          intro="Outcomes from the strategy and insights work I led for Dell at EssenceMediacom | WPP Media."
        />
        <ul className="impact__grid">
          {metrics.map((metric, index) => (
            <Reveal as="li" key={metric.id} delay={0.08 * index} className="impact__item">
              <button type="button" className="impact__tile" onClick={() => openCaseStudy(metric.caseStudyId)}>
                <CountUp metric={metric} className="impact__value" />
                <span className="impact__label">{metric.label}</span>
                <span className="impact__detail">{metric.detail}</span>
                <span className="impact__link">
                  See the case study
                  <ArrowRightIcon />
                </span>
              </button>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
