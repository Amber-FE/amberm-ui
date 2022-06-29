import { App } from 'vue'

import Button from './button'

import './button.scss'

Button.install = (app: App) => {
  // 注册组件
  app.component(Button.name, Button)
}

export default Button
