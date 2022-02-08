import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths()
  ],
})

//References absolute path: https://stackoverflow.com/questions/68241263/absolute-path-not-working-in-vite-project-react-ts
