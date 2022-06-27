import Cell from './index.vue'

Cell.install = (Vue: any) => {
  Vue.component(Cell.name, Cell)
}

export default Cell
