/* eslint-disable import/no-named-as-default */
import { createApp } from 'vue'

import router from './router'
import VueI18n from './language'
import DemoBlock from './src/demoBlock/index'
import App from './App.vue'

// eslint-disable-next-line import/no-relative-packages, @typescript-eslint/no-unused-vars, import/order
import Amberm from '../../../amberm-ui'

const app = createApp(App)
app.use(Amberm)
app.use(VueI18n).use(router).use(DemoBlock).mount('#app')
