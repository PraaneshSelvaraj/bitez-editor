import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'
import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    process.env.VITE_BUILD_MODE === 'lib' && dts({
      insertTypesEntry: true,
      tsconfigPath: './tsconfig.app.json',
      rollupTypes: true
    })
  ],
  build: {
    lib: process.env.VITE_BUILD_MODE === 'lib' ? {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'BitezEditor',
      fileName: 'bitez-editor',
      formats: ['es', 'umd']
    } : undefined,
    rollupOptions: {
      external: process.env.VITE_BUILD_MODE === 'lib' ? ['react', 'react-dom', 'react/jsx-runtime', 'lucide-react'] : [],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'react/jsx-runtime': 'jsxRuntime',
          'lucide-react': 'Lucide'
        }
      }
    }
  }
})
