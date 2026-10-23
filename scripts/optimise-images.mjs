import { mkdir } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import path from 'node:path'
import sharp from 'sharp'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const source = path.join(root, 'src/assets/sakshi-walia-avatar.png')
const outDir = path.join(root, 'src/assets/generated')
const widths = [480, 800, 1200]

await mkdir(outDir, { recursive: true })

for (const width of widths) {
  const base = sharp(source).resize({ width, height: width, fit: 'cover' })
  await base.clone().avif({ quality: 55 }).toFile(path.join(outDir, `sakshi-${width}.avif`))
  await base.clone().webp({ quality: 78 }).toFile(path.join(outDir, `sakshi-${width}.webp`))
  await base.clone().jpeg({ quality: 80, mozjpeg: true }).toFile(path.join(outDir, `sakshi-${width}.jpg`))
}

await sharp(source)
  .resize({ width: 1200, height: 630, fit: 'cover', position: 'attention' })
  .jpeg({ quality: 82, mozjpeg: true })
  .toFile(path.join(root, 'public/og-image.jpg'))

console.log('Images generated in', outDir)
