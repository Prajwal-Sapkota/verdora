import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    sourcemap: false, // Disable source maps for production
    rollupOptions: {
      output: {
        // Manual chunks for better caching
        manualChunks: {
          vendor: ['react', 'react-dom'],
          tailwind: [],
        }
      }
    },
    css: {
      devSourcemap: false,
    }
  },
  optimizeDeps: {
    include: ['react', 'react-dom']
  }
})