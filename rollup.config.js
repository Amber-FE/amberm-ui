/* eslint-disable import/no-extraneous-dependencies */
import global from 'glob'
import babel from '@rollup/plugin-babel';
import postcss from 'rollup-plugin-postcss'
import typescript from 'rollup-plugin-typescript2'
import { DEFAULT_EXTENSIONS } from '@babel/core'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { terser } from 'rollup-plugin-terser'
import commonjs from 'rollup-plugin-commonjs'

const dirPath = 'packages/components'

const inputList = {}

const files = global.sync(`${dirPath}/**/index.ts`)

const getComponentName = (str) => {
  // packages/components/button/index.ts
  return str.split(/[/.]/)[2]
}

files.reduce((obj, cur) => {
  const name = getComponentName(cur)
  obj[name] = `./${cur}`
  return obj
}, inputList)

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

const fullConfig = {
  input: 'packages/components/index.ts',
  plugins,
  output: {
    dir: 'dist',
    name: 'amberm-ui',
    format: 'es'
  }
}

/** @type {import('rollup').RollupOptions} */
const amdMinConfig = {
  input: inputList,
  plugins,
  external: ['vue'],
  // preserveEntrySignatures: 'strict',
  output: [
    // {
    //   dir: 'dist',
    //   file: 'amberm-ui-umd.js',
    //   format: 'umd',
    //   name: 'amberm-ui'
    // },
    {
      dir: 'dist',
      format: 'es',
      sourcemap: true,
      entryFileNames: '[name].min.js'
    }
  ]
}

export default [amdMinConfig]
