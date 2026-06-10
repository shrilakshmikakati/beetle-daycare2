import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server: {
    fs: {
      strict: false,
    },
  },
  base: '/beetle-daycare2/',
  plugins: [react()],
})
