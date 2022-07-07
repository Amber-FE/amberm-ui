import { createApp } from 'vue'

import { Button } from '../../packages/components'

import VueI18n from './language'
import App from './App.vue'
import router from './router'

createApp(App).use(VueI18n).use(router).use(Button).mount('#app')

router.beforeEach((to) => {
  VueI18n.global.locale = to.query.lang
  return true
})
