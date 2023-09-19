import { createApp } from 'vue'
import App from './App.vue'
import routes from '~pages'
import { createRouter, createWebHistory } from 'vue-router'
import V3ScrollLock from 'v3-scroll-lock'
import './assets/css/style.css'
import { createHead } from '@unhead/vue'
import VueSmoothScroll from 'v-smooth-scroll'

const app = createApp(App)
const head = createHead()
app.use(head)
app.use(VueSmoothScroll)

app.use(
  createRouter({
    history: createWebHistory(),
    routes
  })
)
app.use(V3ScrollLock, {})

app.mount('#app')
