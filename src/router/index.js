import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'CommingSoon',
      component: () => import('../components/pages/ComingSoon.vue')
    },
    {
      path: '/skillscanner',
      name: 'SkillScanner',
      component: () => import('../components/pages/SkillScanner.vue')
    },
    {
      path: '/dashboard/persona1',
      name: 'Persona1',
      component: () => import('../components/pages/dashboard/Persona1.vue')
    },
  ]
})

export default router
