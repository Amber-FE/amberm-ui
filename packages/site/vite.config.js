/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    open: '/',
    port: 9909,
    host: '0.0.0.0',
    cors: true
  },
  plugins: [vue(), vueJsx()]
})
