import type { App } from 'vue'

import Tabs from './tabs'

import './style/index.scss'

Tabs.install = (app: App) => {
  // 注册组件
  app.component(Tabs.name, Tabs)
}

export default Tabs
