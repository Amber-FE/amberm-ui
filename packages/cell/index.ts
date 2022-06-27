import Cell from './src/cell.vue'

Cell.install = (Vue: any) => {
  Vue.component(Cell.name, Cell)
}

export default Cell
