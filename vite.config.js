import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

const onVercel = Boolean(process.env.VERCEL)
const vercelHost = process.env.VERCEL_PROJECT_PRODUCTION_URL
const siteUrl = onVercel && vercelHost
  ? `https://${vercelHost}`
  : 'https://thewebtud.github.io/sakshi-walia-portfolio'

// Social-card meta tags need absolute URLs, which depend on the host.
const siteUrlPlugin = {
  name: 'site-url',
  transformIndexHtml: (html) => html.replaceAll('__SITE_URL__', siteUrl),
}

// https://vite.dev/config/
export default defineConfig({
  base: onVercel ? '/' : '/sakshi-walia-portfolio/',
  plugins: [react(), siteUrlPlugin],
})
