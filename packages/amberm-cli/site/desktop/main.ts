import { createApp } from 'vue'

import router from './router'
import VueI18n from './language'
import App from './App.vue'

createApp(App).use(router).use(VueI18n).mount('#app')
