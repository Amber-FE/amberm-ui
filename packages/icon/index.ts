import '../../themes/font/iconfont'
import '../../themes/font/iconfont.css'
import Icon from './src/icon.vue'

Icon.install = (Vue: any) => {
  Vue.component(Icon.name, Icon)
}

export default Icon
