import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  // CF Pages serves at the domain root. (On GH Pages this was '/template_1/'.)
  base: '/',
  plugins: [react(), tailwindcss()],
})
