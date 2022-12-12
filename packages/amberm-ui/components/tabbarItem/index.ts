import type { App } from 'vue'

import TabbarItem from './tabbarItem'

import './style/index.scss'

TabbarItem.install = (app: App) => {
  // 注册组件
  app.component(TabbarItem.name, TabbarItem)
}

export default TabbarItem
