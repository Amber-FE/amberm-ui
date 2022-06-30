import type { App } from 'vue'

import '../styles/index.scss'

import Button from './button'

const component = [Button]

const version = '0.0.1'

const install = (app: App) => {
  if (install.installed) {
    return
  }

  component.forEach((el) => {
    app.component(el.name, el)
  })
}

install.installed = false

if (typeof window !== 'undefined' && (window as any).Vue) {
  install((window as any).Vue)
}

export { Button }

export default {
  version,
  install
}
