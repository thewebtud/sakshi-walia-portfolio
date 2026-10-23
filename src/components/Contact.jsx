import { links, profile } from '../data/index.js'
import { useCopyToClipboard } from '../hooks/useCopyToClipboard.js'
import { CheckIcon, CopyIcon, DownloadIcon, LinkedInIcon, MailIcon, MapPinIcon, PhoneIcon } from './ui/Icons.jsx'
import Reveal from './ui/Reveal.jsx'
import './Contact.css'

const subject = encodeURIComponent('Opportunity: reaching out from your portfolio')

export default function Contact() {
  const [status, copy] = useCopyToClipboard()

  return (
    <section id="contact" className="section contact" aria-labelledby="contact-title">
      <div className="container">
        <Reveal className="contact__card">
          <p className="contact__eyebrow">Contact</p>
          <h2 id="contact-title" className="contact__title">
            Let’s talk strategy, insights and growth.
          </h2>
          <p className="contact__intro">
            I’m looking for my next opportunity in GTM strategy, consumer insights and marketing analytics. If you’re
            hiring, or have a problem worth solving with data, I’d love to hear from you.
          </p>

          <div className="contact__actions">
            <a className="btn btn--primary" href={`mailto:${profile.email}?subject=${subject}`}>
              <MailIcon />
              Email me
            </a>
            <a className="btn btn--ghost" href={profile.resumeUrl} download={profile.resumeFileName}>
              <DownloadIcon />
              Download Resume
            </a>
          </div>

          <ul className="contact__details">
            <li>
              <MailIcon />
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
              <button type="button" className="contact__copy" onClick={() => copy(profile.email)}>
                {status === 'copied' ? <CheckIcon /> : <CopyIcon />}
                {status === 'copied' ? 'Copied' : 'Copy email'}
              </button>
              <span className="sr-only" role="status">
                {status === 'copied' && 'Email address copied to clipboard.'}
                {status === 'failed' && 'Copy failed. Please select the email address and copy it manually.'}
              </span>
              {status === 'failed' && (
                <span className="contact__error" aria-hidden="true">
                  Copy failed, please select the address.
                </span>
              )}
            </li>
            <li>
              <PhoneIcon />
              <a href={`tel:${profile.phoneHref}`}>{profile.phone}</a>
            </li>
            <li>
              <MapPinIcon />
              <span>{profile.location}</span>
            </li>
            {links.linkedin && (
              <li>
                <LinkedInIcon />
                <a href={links.linkedin} target="_blank" rel="noopener noreferrer">
                  LinkedIn profile
                </a>
              </li>
            )}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
