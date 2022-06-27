import Navbar from './index.vue'

Navbar.install = (Vue: any) => {
  Vue.component(Navbar.name, Navbar)
}

export default Navbar
