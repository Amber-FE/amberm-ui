import global from 'glob'
import json from '@rollup/plugin-json';
import vuePlugin from 'rollup-plugin-vue';
import postcss from "rollup-plugin-postcss";
import typescript from 'rollup-plugin-typescript2'
import commonjs from '@rollup/plugin-commonjs';



const dirPath = 'packages/components'

const inputList = {
  index: `packages/components/index.ts`
}

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

const plugins = [vuePlugin(), typescript(), commonjs(), json(), postcss(), ]
const umdMinConfig = {
    input: inputList,
    plugins: plugins,
    output: {
      name: 'TDesign',
      format: 'umd',
      exports: 'named',
      globals: { vue: 'Vue', lodash: '_' },
      entryFileNames: '[name]/index.js',
      assetFileNames: '[name]/index.css',
    },
  };
  
export default [umdMinConfig]