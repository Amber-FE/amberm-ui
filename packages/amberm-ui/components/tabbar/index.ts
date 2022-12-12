import type { App } from 'vue'

import Tabbar from './tabbar'

import './style/index.scss'

Tabbar.install = (app: App) => {
  // 注册组件
  app.component(Tabbar.name, Tabbar)
}

export default Tabbar
