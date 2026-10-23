import { useCallback, useEffect, useRef, useState } from 'react'

// status: 'idle' | 'copied' | 'failed'
export function useCopyToClipboard(resetAfterMs = 2500) {
  const [status, setStatus] = useState('idle')
  const timer = useRef(null)

  useEffect(() => () => clearTimeout(timer.current), [])

  const copy = useCallback(
    async (text) => {
      let next
      try {
        await navigator.clipboard.writeText(text)
        next = 'copied'
      } catch {
        next = 'failed'
      }
      setStatus(next)
      clearTimeout(timer.current)
      timer.current = setTimeout(() => setStatus('idle'), resetAfterMs)
    },
    [resetAfterMs],
  )

  return [status, copy]
}
