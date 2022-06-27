import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import AmberUI from '../packages/index'
import '../packages/styles/index.scss'

createApp(App).use(router).use(AmberUI).mount('#app')
