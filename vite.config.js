/// <reference types="vitest" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',  // This makes the server accessible from the outside Docker network
    port: 5173,       // Ensure this matches the port Traefik is routing to
    watch: {
      usePolling: true}
  },
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './src/test/setup.js',
    include: ['src/**/*.{test,spec}.{js,jsx}'], // Finds tests in any src subfolder
    exclude: ['node_modules', 'dist', '.idea', '.git', '.cache']
  },
})
