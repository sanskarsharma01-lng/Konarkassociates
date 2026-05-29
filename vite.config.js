import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/',
  plugins: [react(), tailwindcss()],
  build: {
    modulePreload: false,
    cssCodeSplit: false,
  },
  html: {
    cspNonce: undefined,
  },
})
