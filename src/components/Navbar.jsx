import { useEffect, useRef, useState } from 'react'
import { useMotionValueEvent, useScroll } from 'motion/react'
import { profile } from '../data/index.js'
import { sections, spyIds } from '../data/sections.js'
import { useScrollSpy } from '../hooks/useScrollSpy.js'
import { CloseIcon, DownloadIcon, MenuIcon } from './ui/Icons.jsx'
import './Navbar.css'

export default function Navbar() {
  const active = useScrollSpy(spyIds)
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const toggleRef = useRef(null)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (y) => setScrolled(y > 24))

  useEffect(() => {
    if (!open) return undefined
    const onKey = (event) => {
      if (event.key === 'Escape') {
        setOpen(false)
        toggleRef.current?.focus()
      }
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header className="navbar" data-scrolled={scrolled}>
      <div className="navbar__inner container">
        <a className="navbar__brand" href="#home">
          <svg className="navbar__mark" viewBox="0 0 64 64" aria-hidden="true" focusable="false">
            <rect width="64" height="64" rx="16" fill="#14161a" />
            <path
              d="M26 21l6 22 7-16 7 16 6-22"
              fill="none"
              stroke="#faf7f4"
              strokeWidth="5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M28 18c-3-3-14-4-14 4 0 9 15 5 15 14 0 8-11 8-16 3"
              fill="none"
              stroke="#ff7ab0"
              strokeWidth="5.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="navbar__name">{profile.name}</span>
        </a>

        <nav id="primary-navigation" className="navbar__nav" aria-label="Primary" data-open={open}>
          <ul className="navbar__links">
            {sections.map(({ id, label }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className="navbar__link"
                  aria-current={active === id ? 'true' : undefined}
                  onClick={() => setOpen(false)}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <a
            className="btn btn--primary btn--small"
            href={profile.resumeUrl}
            download={profile.resumeFileName}
            onClick={() => setOpen(false)}
          >
            <DownloadIcon />
            Resume
          </a>
        </nav>

        <div className="navbar__actions">
          <button
            ref={toggleRef}
            type="button"
            className="navbar__icon-btn navbar__toggle"
            aria-expanded={open}
            aria-controls="primary-navigation"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>
    </header>
  )
}
