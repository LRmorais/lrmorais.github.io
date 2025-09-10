import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// User page (lrmorais.github.io): base: '/'
// Project page (github.com/LRmorais/REPO_NAME): base: '/REPO_NAME/'
export default defineConfig({
  plugins: [react()],
  base: '/'
})