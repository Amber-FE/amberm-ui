import Popup from './index.vue'

Popup.install = (Vue: any) => {
  Vue.component(Popup.name, Popup)
}

export default Popup
