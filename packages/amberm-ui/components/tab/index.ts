import type { App } from 'vue'

import Tab from './tab'

import './style/index.scss'

Tab.install = (app: App) => {
  // 注册组件
  app.component(Tab.name, Tab)
}

export default Tab
