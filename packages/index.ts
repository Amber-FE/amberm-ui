import type { App } from 'vue'

// 引入组件
import Button from './components/button'
import './styles/index.scss'

const version = '0.0.1'

// 存放组件的数组
const components = [Button]

// 定义 install 方法，接收 Vue 作为参数。
const install = (Vue: App) => {
  // 判断是否安装
  if (install.installed) {
    return
  }
  // 遍历 components 数组，来进行全局注册
  components.forEach((component) => {
    Vue.component(component.name, component)
  })
}
install.installed = false

// 判断是否是直接引入文件, cdn使用
if (typeof window !== 'undefined' && (window as any).Vue) {
  install((window as any).Vue)
}

// 导出的对象必须具有 install，默认导出的是此函数，才能被 Vue.use() 方法安装
export default {
  version,
  install
} // 按需引入才会有对应，可以不用全局use，直接再对应组件里面引入
