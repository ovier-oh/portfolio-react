import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,   // <-- cambia el número si quieres
    host: true    // <-- esto permite acceso desde túneles o redes externas
  }
})
