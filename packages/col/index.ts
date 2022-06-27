import Col from './src/col.vue'

Col.install = (Vue: any) => {
  Vue.component(Col.name, Col)
}

export default Col
