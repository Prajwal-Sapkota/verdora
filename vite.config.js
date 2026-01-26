import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    sourcemap: true, // optional, for debugging
    rollupOptions: {
      treeshake: true,
      output: {
        // Split large chunks for better performance
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react-icons')) return 'vendor_icons' // separate react-icons
            if (id.includes('react-dom') || id.includes('react')) return 'vendor_react' // react + react-dom
            return 'vendor' // all other node_modules
          }
        }
      }
    }
  }
})
