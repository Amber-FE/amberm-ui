import Popup from './src/popup.vue'

Popup.install = (Vue: any) => {
  Vue.component(Popup.name, Popup)
}

export default Popup
