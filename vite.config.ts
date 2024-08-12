import path from 'path'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

declare const __dirname: string

export default defineConfig({
  plugins: [react()],
  base: '/spacex-dragon-rocket/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
})
