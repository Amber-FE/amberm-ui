import Sticky from './index.vue'

Sticky.install = (Vue: any) => {
  Vue.component(Sticky.name, Sticky)
}

export default Sticky
