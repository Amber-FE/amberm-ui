// eslint-disable-next-line import/no-unresolved, import/no-import-module-exports
import 'virtual:svg-icons-register'
import Icon from './components/icon/index.vue'
import type { App } from 'vue'

Icon.install = (app: App) => {
  // 注册组件
  app.component(Icon.name, Icon)
}


export default Icon
