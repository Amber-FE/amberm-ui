import type { RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHashHistory } from 'vue-router'

import Button from '../../../amberm-ui/components/button/demo.vue'

import Index from './components/index.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: '/',
    component: Index
  },
  {
    name: 'button',
    component: Button,
    meta: {
      ComponentName: 'Button'
    },
    path: '/button'
  },
  {
    name: 'NotFound',
    path: '/:path(.*)+',
    redirect: () => '/'
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
