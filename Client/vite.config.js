import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/x-pense-app/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks: {
          // Separate chart libraries
          'charts-nivo': ['@nivo/core', '@nivo/line'],
          'charts-others': ['chart.js', 'react-chartjs-2', 'recharts', 'victory'],
          // Separate React ecosystem
          'react-vendor': ['react', 'react-dom'],
          // Separate utility libraries
          'utils': ['lucide-react', 'react-circular-progressbar', 'react-datepicker', 'structured-clone']
        }
      }
    }
  }
})
