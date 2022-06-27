/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'

// const path = require('path')

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    target: 'es2015',
    outDir: 'dist',
    emptyOutDir: false,
    rollupOptions: {
      external: ['vue', 'vue-router', 'vitepress', 'less', '@types/node', 'vite-plugin-dts'],
      input: ['packages/index.ts', 'packages/button/index.ts'],
      output: [
        // esm
        {
          format: 'es',
          dir: 'es',
          entryFileNames: '[name].js',
          preserveModules: true,
          preserveModulesRoot: 'packages'
        },
        // cjs
        {
          format: 'cjs',
          dir: 'lib',
          entryFileNames: '[name].js',
          preserveModules: true,
          preserveModulesRoot: 'packages'
        }
      ]
    },
    lib: {
      // 入口
      entry: 'packages/index.ts',
      name: 'AmberMobile',
      formats: ['cjs', 'es']
      // fileName: "[name]",
    }
  },

  plugins: [
    vue(),
    // 自动构建.d.ts
    dts({
      outputDir: 'es'
      // 入口
    }),
    dts({
      outputDir: 'lib'
      // 入口
    }),
    dts({
      outputDir: 'dist'
      // 入口
    })
  ],
  server: {
    port: 8000,
    host: '0.0.0.0',
    cors: true
  }
})
