import Col from './index.vue'

Col.install = (Vue: any) => {
  Vue.component(Col.name, Col)
}

export default Col
