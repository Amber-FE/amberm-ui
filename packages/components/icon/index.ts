import '../../styles/font/iconfont'
import '../../styles/font/iconfont.css'
import Icon from './index.vue'

Icon.install = (Vue: any) => {
  Vue.component(Icon.name, Icon)
}

export default Icon
