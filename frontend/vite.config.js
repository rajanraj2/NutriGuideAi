import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'build' // Change output folder to "build"
  },
  server: {
    historyApiFallback: true,
  }
})
