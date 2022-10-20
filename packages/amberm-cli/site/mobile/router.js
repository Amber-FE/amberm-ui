/* eslint-disable import/order */
// import type { RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHistory } from 'vue-router'
import { demos } from 'site-mobile-shared'

import Index from './components/index.vue'
// eslint-disable-next-line import/no-relative-packages
// import Button from '../../../amberm-ui/components/button/demo.vue'
import { listenToSyncPath, syncPathToParent } from '../common/utils/iframe-router'
import { watch, nextTick } from 'vue'

const routes = [
  {
    path: '/',
    name: '/',
    component: Index
  }
]

// routes.push({
//   name: 'button',
//   path: '/button',
//   component: Button,
//   meta: {
//     ComponentName: 'button'
//   }
// })
const names = Object.keys(demos)
names.forEach((name) => {
  routes.push({
    name,
    path: `/${name}`,
    component: demos[name],
    meta: {
      ComponentName: name
    }
  })
})

routes.push({
  name: 'NotFound',
  path: '/:path(.*)+',
  redirect: () => '/'
})

const router = createRouter({
  history: createWebHistory(),
  routes
})
watch(router.currentRoute, () => {
  if (!router.currentRoute.value.redirectedFrom) {
    nextTick(syncPathToParent)
  }
})

listenToSyncPath(router)
window.vueRouter = router
export default router
