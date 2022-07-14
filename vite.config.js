import { defineConfig } from 'vite'

import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      'prosemirror-model': resolve('node_modules/prosemirror-model'),
    },
    dedupe: ['prosemirror-model']
  },
  test: {
    globals: true,
    environment: 'jsdom',
    coverage:{
      reporter: ['text', 'html']
    }
  }
})
