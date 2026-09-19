import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// The backend has no CORS middleware, so the browser talks to this dev server
// only: /api/... is proxied to FastAPI, keeping everything same-origin.
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:8000',
        changeOrigin: true,
      },
    },
  },
})
