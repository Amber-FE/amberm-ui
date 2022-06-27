import Navbar from './src/navbar.vue'

Navbar.install = (Vue: any) => {
  Vue.component(Navbar.name, Navbar)
}

export default Navbar
