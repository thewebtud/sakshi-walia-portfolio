import { useCallback, useEffect, useRef, useState } from 'react'

const STORAGE_KEY = 'theme'
const DARK_QUERY = '(prefers-color-scheme: dark)'
const TRANSITION_MS = 400

function readStored() {
  try {
    const value = localStorage.getItem(STORAGE_KEY)
    return value === 'light' || value === 'dark' ? value : null
  } catch {
    return null
  }
}

function writeStored(value) {
  try {
    localStorage.setItem(STORAGE_KEY, value)
  } catch {
    // Storage blocked: the choice applies to this page view only.
  }
}

const readSystem = () => (window.matchMedia(DARK_QUERY).matches ? 'dark' : 'light')

// An unkeyed theme-color meta placed first overrides the media-keyed fallbacks in index.html.
function syncThemeColor(choice) {
  const root = document.documentElement
  let meta = document.head.querySelector('meta[name="theme-color"][data-theme-override]')
  if (!choice) {
    meta?.remove()
    return
  }
  if (!meta) {
    meta = document.createElement('meta')
    meta.name = 'theme-color'
    meta.dataset.themeOverride = ''
    document.head.prepend(meta)
  }
  meta.content = getComputedStyle(root).getPropertyValue('--bg').trim()
}

export function useTheme() {
  const [choice, setChoice] = useState(readStored)
  const [system, setSystem] = useState(readSystem)
  const timer = useRef(0)

  useEffect(() => {
    const query = window.matchMedia(DARK_QUERY)
    const onChange = (event) => setSystem(event.matches ? 'dark' : 'light')
    query.addEventListener('change', onChange)
    return () => query.removeEventListener('change', onChange)
  }, [])

  useEffect(() => {
    const root = document.documentElement
    if (choice) root.dataset.theme = choice
    else delete root.dataset.theme
    syncThemeColor(choice)
  }, [choice])

  useEffect(() => () => window.clearTimeout(timer.current), [])

  const theme = choice ?? system

  const toggleTheme = useCallback(() => {
    const root = document.documentElement
    root.dataset.themeTransition = ''
    window.clearTimeout(timer.current)
    timer.current = window.setTimeout(() => delete root.dataset.themeTransition, TRANSITION_MS)

    const next = theme === 'dark' ? 'light' : 'dark'
    writeStored(next)
    setChoice(next)
  }, [theme])

  return { theme, toggleTheme }
}
