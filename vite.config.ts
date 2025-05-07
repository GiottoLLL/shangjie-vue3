/*
 * @Description: 
 * @Version: 0.1
 * @Autor: GiottoLLL7
 * @Date: 2024-05-25 12:38:23
 * @LastEditors: GiottoLLL7
 * @LastEditTime: 2024-05-25 16:00:47
 */
import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
