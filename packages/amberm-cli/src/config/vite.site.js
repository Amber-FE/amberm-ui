import { resolve } from 'path'

import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

import { DEV_SERVER, SITE_SRC_DIR, SITE_OUTPUT_DIR } from './amberm.config.js'

export function getViteConfigDev() {
  return {
    root: SITE_SRC_DIR,
    server: DEV_SERVER,
    plugins: [vue(), vueJsx()],
    build: {
      rollupOptions: {
        input: {
          index: resolve(SITE_SRC_DIR, 'index.html'),
          mobile: resolve(SITE_SRC_DIR, 'mobile.html')
        }
      }
    }
  }
}

export function getViteConfigBuild() {
  return {
    base: './',
    root: SITE_SRC_DIR,
    plugins: [vue(), vueJsx()],
    build: {
      outDir: SITE_OUTPUT_DIR,
      emptyOutDir: true,
      rollupOptions: {
        input: {
          index: resolve(SITE_SRC_DIR, 'index.html'),
          mobile: resolve(SITE_SRC_DIR, 'mobile.html')
        }
      }
    }
  }
}
