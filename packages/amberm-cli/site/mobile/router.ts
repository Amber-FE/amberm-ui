import type { RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHistory } from 'vue-router'

import Index from './components/index.vue'
import Button from '../../../amberm-ui/components/button/demo.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: '/',
    component: Index
  }
]

routes.push({
  name: 'button',
  path: '/button',
  component: Button,
  meta: {
    ComponentName: 'button'
  }
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

export default router
