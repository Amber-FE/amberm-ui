import DefaultTheme from 'vitepress/theme'
import MyLayout from './layout/index.vue'
// 主题样式
// 插件的组件，主要是demo组件
import './styles/index.css'
// console.log( process)
export default {
  ...DefaultTheme,
  Layout: MyLayout
}
