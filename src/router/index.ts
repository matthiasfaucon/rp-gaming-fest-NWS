import { createRouter, createWebHistory } from 'vue-router'
import Programme from '../views/Programme.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'presentation',
      component: () => import('../views/Presentation.vue')
    },
    {
      path: '/programme',
      name: 'programme',
      component: () => import('../views/Programme.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/Contact.vue')
    },
    {
      path: '/billeterie',
      name: 'billeterie',
      component: () => import('../views/Billeterie.vue')
    }
  ]
})

export default router
