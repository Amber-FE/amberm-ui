import type { RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHashHistory } from 'vue-router'

import Index from './components/index.vue'
import { nav } from './config.json'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: '/',
    component: Index
  }
]

const findComponentName = (name: string) => {
  // eslint-disable-next-line no-restricted-syntax
  for (const key in nav) {
    if (Object.prototype.hasOwnProperty.call(nav, key)) {
      const element = nav[key]
      const idx = element.packages.findIndex((i) => i.name.toLowerCase() === name)
      if (idx !== -1) {
        return element.packages[idx].name
      }
    }
  }
  return ''
}

/** vite */
const modulesPage = import.meta.glob('../../components/**/demo.vue')

Object.keys(modulesPage).forEach((key) => {
  const name = (/components\/(.*)\/demo.vue/.exec(modulesPage[key]) as any[])[1]
  routes.push({
    path: `/${name}`,
    component: modulesPage[key],
    name,
    meta: {
      ComponentName: findComponentName(name)
    }
  })
})

routes.push({
  name: 'NotFound',
  path: '/:path(.*)+',
  redirect: () => '/'
})

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
