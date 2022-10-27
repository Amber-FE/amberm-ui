/* eslint-disable import/no-relative-packages */
/* eslint-disable import/extensions */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { createApp } from 'vue'

// eslint-disable-next-line import/no-relative-packages
import { install as Amberm } from '../../../amberm-ui'

import VueI18n from './language'
import App from './App.vue'
import router from './router'

createApp(App).use(VueI18n).use(Amberm).use(router).mount('#app')

router.beforeEach((to, from, next) => {
  if (to.query.lang) {
    VueI18n.global.locale = to.query.lang
  }
  if (to.query.path) {
    next({ path: to.query.path })
  }

  next()
})
