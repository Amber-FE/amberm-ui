import { dirname, join } from 'path'
import { fileURLToPath } from 'url'

import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// eslint-disable-next-line no-underscore-dangle
const __dirname = dirname(fileURLToPath(import.meta.url))

export const SITE_SRC_DIR = join(__dirname, '..', '..', 'site')

export function getViteConfigDev() {
  return {
    root: SITE_SRC_DIR,
    server: {
      port: 9909,
      host: '0.0.0.0',
      cors: true
    },
    plugins: [vue(), vueJsx()]
  }
}
