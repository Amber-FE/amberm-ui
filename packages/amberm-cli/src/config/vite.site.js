import { dirname, join, resolve } from 'path'
import { fileURLToPath } from 'url'

import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// eslint-disable-next-line no-underscore-dangle
const __dirname = dirname(fileURLToPath(import.meta.url))
export const SITE_SRC_DIR = join(__dirname, '..', '..', 'site')
console.log(resolve(SITE_SRC_DIR, 'index.html'))
console.log(resolve(SITE_SRC_DIR, 'mobile.html'))

export function getViteConfigDev() {
  return {
    root: SITE_SRC_DIR,
    server: {
      port: 9909,
      host: '0.0.0.0',
      cors: true
    },
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
