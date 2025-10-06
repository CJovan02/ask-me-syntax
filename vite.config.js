import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  //base: "/ask-me-syntax/"
  base: process.env.VITE_BASE_PATH || "/ask-me-syntax"
})
