import { createApp } from 'vue'

import router from './router'
import VueI18n from './language'

import App from './App.vue'

createApp(App).use(VueI18n).use(router).mount('#app')
