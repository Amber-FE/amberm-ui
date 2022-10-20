/* eslint-disable @typescript-eslint/no-use-before-define */
import path from 'path'
import { fileURLToPath } from 'url'

import { build, defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'
import DefineOptions from 'unplugin-vue-define-options/vite'
import vueJsx from '@vitejs/plugin-vue-jsx'

// 根目录
const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)
const rootDir = path.resolve(dirname, '../../../../')

// 打包后的目录
const outDir = resolve('packages/amberm/dist')

const baseConfig = defineConfig({
  plugins: [
    vue(),
    DefineOptions(),
    vueJsx(),
    dts({
      include: ['/packages/components'],
      outputDir: path.resolve(outDir, 'types')
    })
  ],
  build: {
    lib: {
      entry: resolve('packages/amberm-ui/index.ts'),
      name: 'amberm',
      fileName: (format) => `index.${format}.js`
    },
    outDir,
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ['vue'],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: 'Vue'
        }
      }
    }
  }
})

export const buildC = main

async function main() {
  // build
  await build(baseConfig)
}

function resolve(...urlOrUrls) {
  return path.resolve(rootDir, ...urlOrUrls)
}
