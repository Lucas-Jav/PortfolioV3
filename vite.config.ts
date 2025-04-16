import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import env from "dotenv";
env.config();

export default defineConfig({
  plugins: [react()],
  base: "/",
  server: {
    open: true
  },
  define: {
    'process.env': {
      API_URL: process.env.API_URL
    }
  }
})
