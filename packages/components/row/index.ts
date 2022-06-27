import Row from './index.vue'

Row.install = (Vue: any) => {
  Vue.component(Row.name, Row)
}

export default Row
