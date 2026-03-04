import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import i18n from './i18n'
import './assets/main.css'

import LandingPage from './views/LandingPage.vue'
import RedirectPage from './views/RedirectPage.vue'

const isWebApp = import.meta.env.VITE_WEB_APP === 'true'

const routes = isWebApp
  ? [
      { path: '/', component: LandingPage },
      { path: '/:pathMatch(.*)*', redirect: '/' },
    ]
  : [
      { path: '/', component: RedirectPage },
      { path: '/:pathMatch(.*)*', redirect: '/' },
    ]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth' }
    }
    return savedPosition || { top: 0 }
  },
})

const app = createApp(App)
app.use(router)
app.use(i18n)
app.mount('#app')
