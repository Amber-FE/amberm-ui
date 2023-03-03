import type { App } from 'vue'

import Badge from './badge'

import './style/index.scss'

Badge.install = (app: App) => {
  // 注册组件
  app.component(Badge.name, Badge)
}

export default Badge
