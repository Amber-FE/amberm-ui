// import type { RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHistory,createWebHashHistory } from 'vue-router'
// import Button from 'amberm-ui/packages/amberm-ui/components/button/button.md'
import { config, documents } from 'site-desktop-shared'
import { nextTick } from 'vue'

import { listenToSyncPath, syncPathToChild } from '../common/utils/iframe-router'

import Index from './src/desktopMain.vue'
import Start from './src/layout.vue'

const { locales } = config.site

function getRoutes() {
  const routes = []
  const names = Object.keys(documents)

  if (locales) {
    routes.push({
      name: 'notFound',
      path: '/:path(.*)+'
      // redirect: (route) => ({
      //   name: getLangFromRoute(route)
      // })
    })
  } else {
    routes.push({
      name: 'notFound',
      path: '/:path(.*)+',
      redirect: {
        name: 'start'
      }
    })
  }

  function addHomeRoute(Home, lang) {
    routes.push({
      name: lang || 'home',
      path: `/${lang || ''}`,
      component: Home,
      meta: { lang }
    })
  }

  names.forEach((name) => {
    const lang = false
    if (name === 'home') {
      addHomeRoute(documents[name])
    }

    if (lang) {
      routes.push({
        name,
        path: name,
        component: documents[name],
        meta: {
          lang,
          name
        }
      })
    } else {
      routes.push({
        name,
        path: `/${name}`,
        component: documents[name],
        meta: {
          name
        }
      })
    }
  })

  return routes
}

const routes = [
  {
    path: '/',
    name: '/',
    component: Index
  },
  {
    path: '/start',
    name: 'start',
    component: Start,
    redirect: '/introduce',
    children: getRoutes()
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})
router.afterEach(() => {
  nextTick(syncPathToChild)
})

if (config.site.simulator?.syncPathFromSimulator !== false) {
  listenToSyncPath(router)
}
window.vueRouter = router
export default router
