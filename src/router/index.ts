import { createRouter, createWebHistory } from 'vue-router'
import Ranking from '../views/Ranking.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Ranking',
      component: Ranking
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/personal',
      name: 'personal',
      component: () => import('../views/PersonalScore.vue')
    }
  ]
})

export default router
