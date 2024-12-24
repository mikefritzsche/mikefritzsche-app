import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',  // This makes the server accessible from the outside Docker network
    port: 5173,       // Ensure this matches the port Traefik is routing to
    watch: {
      usePolling: true}
  }
})
