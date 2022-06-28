import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import AmberUI from '../packages/index'

createApp(App).use(router).use(AmberUI).mount('#app')
