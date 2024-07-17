import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import vue from '@vitejs/plugin-react'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import "bootstrap/scss/bootstrap";
        `,
        quietDeps: true, // Suppress deprecation warnings
      

      }
    }
  },

  base: "https://sam8beard.github.io/personal_portfolio/"
})
