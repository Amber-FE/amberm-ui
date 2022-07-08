/* eslint-disable import/no-extraneous-dependencies */
import fs from 'fs'
import path from 'path'

import babel from '@rollup/plugin-babel'
import postcss from 'rollup-plugin-postcss'
import typescript from 'rollup-plugin-typescript2'
import { DEFAULT_EXTENSIONS } from '@babel/core'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { terser } from 'rollup-plugin-terser'
import commonjs from 'rollup-plugin-commonjs'

const baseFolder = './packages/amberm-ui'
const componentsFolder = 'components/'

const components = fs
  .readdirSync(baseFolder + componentsFolder)
  .filter((f) => fs.statSync(path.join(baseFolder + componentsFolder, f)).isDirectory())

const entriespath = {
  ...components.reduce((obj, name) => {
    obj[name] = `${baseFolder + componentsFolder + name}/index.ts`
    return obj
  }, {})
}

const plugins = [
  typescript(),
  vue(),
  vueJsx(),
  babel({
    exclude: 'node_modules/**',
    extensions: [...DEFAULT_EXTENSIONS, '.vue', '.ts', '.tsx']
  }),
  postcss(),
  commonjs(),
  terser()
]

/** @type {import('rollup').RollupOptions} */
const esMinConfig = {
  input: entriespath,
  plugins,
  external: ['vue'],
  // preserveEntrySignatures: 'strict',
  output: [
    {
      dir: 'dist',
      format: 'es',
      sourcemap: true,
      entryFileNames: '[name].min.js'
    }
  ]
}

export default [esMinConfig]
