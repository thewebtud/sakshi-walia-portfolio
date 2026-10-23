import avif480 from './generated/sakshi-480.avif'
import avif800 from './generated/sakshi-800.avif'
import avif1200 from './generated/sakshi-1200.avif'
import webp480 from './generated/sakshi-480.webp'
import webp800 from './generated/sakshi-800.webp'
import webp1200 from './generated/sakshi-1200.webp'
import jpg480 from './generated/sakshi-480.jpg'
import jpg800 from './generated/sakshi-800.jpg'
import jpg1200 from './generated/sakshi-1200.jpg'

export const photo = {
  avif: `${avif480} 480w, ${avif800} 800w, ${avif1200} 1200w`,
  webp: `${webp480} 480w, ${webp800} 800w, ${webp1200} 1200w`,
  jpg: `${jpg480} 480w, ${jpg800} 800w, ${jpg1200} 1200w`,
  fallback: jpg800,
  size: 800,
}
