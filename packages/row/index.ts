import Row from './src/row.vue'

Row.install = (Vue: any) => {
  Vue.component(Row.name, Row)
}

export default Row
