import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../views/Dashboard.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/personal',
      name: 'personal',
      component: () => import('../views/PersonalScore.vue')
    },
    {
      path: '/rank',
      name: 'rank',
      component: () => import('../views/Ranking.vue')
    }
  ]
})

export default router
