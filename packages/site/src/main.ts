import { createApp } from 'vue'

import { Button } from '../../components/index'

import App from './App.vue'
import router from './router'

createApp(App).use(router).use(Button).mount('#app')
