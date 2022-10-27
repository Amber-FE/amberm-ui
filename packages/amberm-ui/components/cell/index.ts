import type { App } from 'vue'

import Cell from './cell'

import './style/index.scss'

Cell.install = (app: App) => {
  // 注册组件
  app.component(Cell.name, Cell)
}

export default Cell
