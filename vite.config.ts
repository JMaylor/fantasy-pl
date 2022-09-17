import { URL, fileURLToPath } from 'node:url'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components(),
    AutoImport({
      include: [
        /\.[tj]s?$/, // .ts, .js
        /\.vue$/,
        /\.vue\?vue/, // .vue
      ],

      imports: [
        'vue',
        'vue-router',
        'pinia',
        '@vueuse/core',
      ],

      dirs: [
        'src/stores',
        'src/composables',
      ],

    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
