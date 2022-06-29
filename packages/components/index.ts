import type { App } from 'vue'

import * as component from './components'

import '../styles/index.scss'

const version = '0.0.1'

const install = (app: App) => {
  if (install.installed) {
    return
  }

  Object.keys(component).forEach((key) => {
    app.component(component[key].name, component[key])
  })
}

install.installed = false

if (typeof window !== 'undefined' && (window as any).Vue) {
  install((window as any).Vue)
}

export default {
  version,
  install
}
