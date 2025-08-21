import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/Pport/',   // <<— IMPORTANT: include leading & trailing slash
  plugins: [react()],
})