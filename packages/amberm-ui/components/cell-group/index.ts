import type { App } from 'vue'

import CellGroup from './CellGroup'

import './style/index.scss'

CellGroup.install = (app: App) => {
  // 注册组件
  app.component(CellGroup.name, CellGroup)
}

export default CellGroup
