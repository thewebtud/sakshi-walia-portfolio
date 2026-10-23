import Reveal from './Reveal.jsx'
import './SectionHeading.css'

export default function SectionHeading({ id, eyebrow, title, intro }) {
  return (
    <Reveal className="section-heading">
      <p className="section-heading__eyebrow">{eyebrow}</p>
      <h2 id={id} className="section-heading__title">
        {title}
      </h2>
      {intro && <p className="section-heading__intro">{intro}</p>}
    </Reveal>
  )
}
