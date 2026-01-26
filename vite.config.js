import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    // SOURCE MAPS: Generate for production
    sourcemap: true, // Change from false to true
    
    // Optional: Create external sourcemap file (better for privacy)
    sourcemap: 'hidden', // Generates .map file but doesn't link
    
    // Or use this for better control:
    sourcemap: process.env.NODE_ENV === 'production' ? 'hidden' : true,
    
    // Minify but keep source maps
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
      sourceMap: {
        url: 'inline' // Include sourcemap in JS file
      }
    },
    
    rollupOptions: {
      output: {
        // Add sourcemap file references
        sourcemapBaseUrl: 'https://yourdomain.com/',
        sourcemapFileNames: 'assets/[name]-[hash].js.map',
        
        // Manual chunks to reduce file size
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'icons': [/react-icons/],
        }
      }
    }
  },
  
  // Enable source maps in dev
  server: {
    sourcemapIgnoreList: (sourcePath) => {
      // Ignore node_modules from source maps
      return sourcePath.includes('node_modules');
    }
  }
})