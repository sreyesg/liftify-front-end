import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  'react/prop-types': 'off', // add this line
  'react/no-unescaped-entities': 'off' // add this line
})
