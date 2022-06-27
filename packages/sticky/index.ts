import Sticky from './src/sticky.vue'

Sticky.install = (Vue: any) => {
  Vue.component(Sticky.name, Sticky)
}

export default Sticky
