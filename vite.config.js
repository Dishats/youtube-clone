import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    sourcemap: true, // Helps trace errors in production builds
  },
  logLevel: 'info', // Show more logs during build
})
