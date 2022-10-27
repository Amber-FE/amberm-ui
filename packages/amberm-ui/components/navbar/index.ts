import type { App } from 'vue'

import Navbar from './navbar'

import './style/index.scss'

Navbar.install = (app: App) => {
  // 注册组件
  app.component(Navbar.name, Navbar)
}

export default Navbar
