import DefaultTheme from 'vitepress/theme'
import MyLayout from './layout/index.vue'
// 主题样式
// 插件的组件，主要是demo组件
import './styles/index.css'

export default {
  ...DefaultTheme,
  Layout: MyLayout,
  enhanceApp({ app, router, siteData }) {
    app.mixin({
      created() {
        import('../../../packages/index').then(function (m) {
          app.use(m.default)
        })
      }
    })
  }
}
