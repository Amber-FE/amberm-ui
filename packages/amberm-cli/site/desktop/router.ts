import type { RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHistory } from 'vue-router'

import Index from './src/desktopMain.vue'
import Start from './src/layout.vue'
import Button from './src/button.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: '/',
    component: Index
  },
  {
    path: '/start',
    name: 'start',
    component: Start,
    children: [
      {
        path: '/start/button',
        name: 'button',
        component: Button
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
