import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { caseStudies, skills, themes } from '../data/index.js'
import { CaseStudyContext } from './caseStudyContext.js'
import { ArrowLeftIcon, ArrowRightIcon, CloseIcon } from './ui/Icons.jsx'
import './CaseStudyDialog.css'

const allIds = caseStudies.map((study) => study.id)
const studyById = new Map(caseStudies.map((study) => [study.id, study]))
const themeById = new Map(themes.map((theme) => [theme.id, theme.label]))
const skillById = new Map(skills.map((skill) => [skill.id, skill.label]))

// Renders **bold** as <strong> and *italic* as <em>; everything else stays plain text.
function renderInline(text) {
  return text.split(/(\*\*.+?\*\*|\*.+?\*)/g).map((part, index) => {
    if (part.startsWith('**') && part.endsWith('**') && part.length > 4) {
      return <strong key={index}>{part.slice(2, -2)}</strong>
    }
    if (part.startsWith('*') && part.endsWith('*') && part.length > 2) {
      return <em key={index}>{part.slice(1, -1)}</em>
    }
    return part
  })
}

export default function CaseStudyProvider({ children }) {
  const [state, setState] = useState({ openId: null, order: allIds })
  const dialogRef = useRef(null)
  const bodyRef = useRef(null)

  const openCaseStudy = useCallback((id, order = allIds) => {
    setState({ openId: id, order: order.includes(id) ? order : allIds })
  }, [])

  const close = useCallback(() => setState((current) => ({ ...current, openId: null })), [])
  const context = useMemo(() => ({ openCaseStudy }), [openCaseStudy])

  const { openId, order } = state
  const study = openId ? studyById.get(openId) : null
  const position = order.indexOf(openId)

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return undefined
    if (openId && !dialog.open) dialog.showModal()
    if (!openId && dialog.open) dialog.close()
    document.documentElement.toggleAttribute('data-scroll-locked', Boolean(openId))
    return () => document.documentElement.removeAttribute('data-scroll-locked')
  }, [openId])

  useEffect(() => {
    if (openId) bodyRef.current?.scrollTo({ top: 0 })
  }, [openId])

  const step = (delta) => {
    const next = order[(position + delta + order.length) % order.length]
    setState((current) => ({ ...current, openId: next }))
  }

  return (
    <CaseStudyContext.Provider value={context}>
      {children}
      <dialog
        ref={dialogRef}
        className="case-dialog"
        aria-labelledby="case-dialog-title"
        onClose={close}
        onKeyDown={(event) => {
          if (event.key === 'Escape') {
            event.preventDefault()
            close()
          }
        }}
        onClick={(event) => {
          if (event.target === event.currentTarget) close()
        }}
      >
        {study && (
          <div className="case-dialog__panel">
            <header className="case-dialog__header">
              <div>
                <p className="case-dialog__theme">{themeById.get(study.theme)}</p>
                <h3 id="case-dialog-title" className="case-dialog__title">
                  {study.title}
                </h3>
              </div>
              <button type="button" className="case-dialog__close" onClick={close} aria-label="Close case study">
                <CloseIcon />
              </button>
            </header>

            <div ref={bodyRef} className="case-dialog__body">
              {study.metric && (
                <p className="case-dialog__metric">
                  <strong>{study.metric}</strong>
                  <span>{study.metricLabel}</span>
                </p>
              )}

              <section>
                <h4>Challenge</h4>
                <p>{renderInline(study.challenge)}</p>
              </section>
              <section>
                <h4>Approach</h4>
                <ul>
                  {study.approach.map((item) => (
                    <li key={item}>{renderInline(item)}</li>
                  ))}
                </ul>
              </section>
              <section>
                <h4>Outcome</h4>
                <p>{renderInline(study.outcome)}</p>
              </section>

              {study.skills.length > 0 && (
                <ul className="case-dialog__skills" aria-label="Skills used">
                  {study.skills.map((id) => (
                    <li key={id}>{skillById.get(id)}</li>
                  ))}
                </ul>
              )}

              {study.links?.length > 0 && (
                <section>
                  <h4>Links</h4>
                  <ul>
                    {study.links.map((link) => (
                      <li key={link.url}>
                        <a href={link.url} target="_blank" rel="noopener noreferrer">
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </section>
              )}
            </div>

            <footer className="case-dialog__footer">
              <button type="button" className="btn btn--ghost btn--small" onClick={() => step(-1)}>
                <ArrowLeftIcon />
                Previous
              </button>
              <span className="case-dialog__count" aria-live="polite">
                {position + 1} of {order.length}
              </span>
              <button type="button" className="btn btn--ghost btn--small" onClick={() => step(1)}>
                Next
                <ArrowRightIcon />
              </button>
            </footer>
          </div>
        )}
      </dialog>
    </CaseStudyContext.Provider>
  )
}
