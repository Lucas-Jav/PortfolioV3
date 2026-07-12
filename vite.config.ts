import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import env from "dotenv";
env.config();

export default defineConfig({
  plugins: [react()],
  base: "/",
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          react: ["react", "react-dom"],
          mui: ["@mui/material", "@mui/icons-material", "@emotion/react", "@emotion/styled"],
        },
      },
    },
  },
  server: {
    open: true
  },
  define: {
    'process.env': {
      API_URL: process.env.API_URL
    }
  }
})
