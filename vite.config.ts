/// <reference types='vitest' />
/// <reference types='vite/client' />
 
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { name } from './package.json'
import svgr from 'vite-plugin-svgr';

import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(), 
    svgr({
      svgrOptions: {
        exportType: 'default', // или 'named'
      }
    }),
    tailwindcss(),
  ],
  base: `/${name}/`,
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/setupTests.ts'],
  },
})

