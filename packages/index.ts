import './styles/common.scss'
import './styles/variables.scss'
// 引入组件
import Button from './components/button'
import Icon from './components/icon'
import Cell from './components/cell'
import CellGround from './components/cell-ground'
import Popup from './components/popup'
import Navbar from './components/navbar'
import Divider from './components/divider'
import Sticky from './components/sticky'
import Row from './components/row'
import Col from './components/col'
import { App } from 'vue'

// 存放组件的数组
const components = [Button, Icon, Cell, CellGround, Popup, Navbar, Divider, Sticky, Row, Col]

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
  version: '0.0.1',
  install,
  ...components
} // 按需引入才会有对应，可以不用全局use，直接再对应组件里面引入
