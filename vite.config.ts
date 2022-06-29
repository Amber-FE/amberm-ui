/* eslint-disable import/no-extraneous-dependencies */
import { resolve }  from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import global from 'glob'

const dirPath = 'packages/components'

const list = {
  index: resolve(`./packages/index.ts`)
}

const files = global.sync(`${dirPath}/**/index.ts`)

const getComponentName = (str: string) => {
  // packages/components/button/index.ts
  return str.split(/[/.]/)[2]
}

const inputs = files.reduce((obj, cur) => {
  // button
  const name = getComponentName(cur)
  // eslint-disable-next-line no-param-reassign
  obj[name] = resolve(`./${cur}`)
  return obj
}, list)

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    minify: false,
    emptyOutDir: false,
    rollupOptions: {
      external: ['vue'],
      input: inputs,
      preserveEntrySignatures: 'strict',
      output: {
        entryFileNames: '[name]/index.js',
        assetFileNames: '[name]/index.css',
        format: 'es'
      }
    }
  },
  plugins: [vue(), vueJsx()],
  server: {
    port: 8000,
    host: '0.0.0.0',
    cors: true
  }
})
