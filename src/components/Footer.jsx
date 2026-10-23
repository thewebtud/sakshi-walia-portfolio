import { profile } from '../data/index.js'
import { ArrowUpIcon } from './ui/Icons.jsx'
import './Contact.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner container">
        <p>© {new Date().getFullYear()} {profile.name}. {profile.headline}.</p>
        <a className="footer__top" href="#home">
          Back to top
          <ArrowUpIcon />
        </a>
      </div>
    </footer>
  )
}
