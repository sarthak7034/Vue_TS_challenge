import Vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  plugins: [
    Vue(),
  ],
  test: {
    environment: 'jsdom',
    coverage: {
      lines: 90,
      functions: 90,
      branches: 90,
    },
  },
})
