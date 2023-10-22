import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import env from "dotenv";
env.config();

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    open: true
  },
  define: {
    'process.env': {
      API_URL: process.env.API_URL
    }
  }
})
