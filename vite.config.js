import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { visualizer } from 'rollup-plugin-visualizer'

export default defineConfig({
  plugins: [
    react(), 
    tailwindcss(),
    visualizer({
      open: true,
      filename: 'dist/stats.html',
    })
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          // Force ALL node_modules into separate chunks
          if (id.includes('node_modules')) {
            if (id.includes('react-icons')) return 'vendor-icons';
            if (id.includes('react')) return 'vendor-react';
            return 'vendor';
          }
        }
      }
    }
  }
})