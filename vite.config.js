import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Acai Hero — single-page marketing site.
export default defineConfig({
  // Served from https://<user>.github.io/acai-hero/ on GitHub Pages.
  base: '/acai-hero/',
  plugins: [react()],
  server: { host: true, port: 5173 },
})
