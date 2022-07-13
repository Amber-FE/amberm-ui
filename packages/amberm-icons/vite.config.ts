import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path' // 主要用于alias文件路径别名
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    createSvgIconsPlugin({
      iconDirs: [resolve(process.cwd(), 'src/assets')],
      symbolId: 'amberm-[dir]-[name]'
    })
  ],
  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.json', '.vue']
  },
  build: {
    lib: {
      entry: resolve(__dirname, './src/index.ts'), // 设置入口文件
      name: 'AmbermIcons', // 暴露全局变量
      fileName: (format) => `amberm-icons.${format}.js` // 输出的包文件名
    },
    rollupOptions: {
      // 确保外部处理那些你不想打包进库的依赖
      external: ['vue'],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: 'Vue',
          AmbermIcons: 'AmbermIcons'
        }
      }
    }
  }
})
