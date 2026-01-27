import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    sourcemap: false, 
    rollupOptions: {
      treeshake: true,
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react-icons')) return 'vendor_icons' 
            if (id.includes('react-dom') || id.includes('react')) return 'vendor_react'
            return 'vendor' 
          }
        }
      }
    }
  }
})
