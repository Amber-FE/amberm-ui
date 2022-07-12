import type { RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHistory } from 'vue-router'

import Index from './src/desktopMain.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: '/',
    component: Index
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
