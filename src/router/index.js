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
    {
      path: '/dashboard/persona2',
      name: 'Persona2',
      component: () => import('../components/pages/dashboard/Persona2.vue')
    },
    {
      path: '/my-talent',
      name: 'MyTalent',
      component: () => import('../components/pages/ComingSoon.vue')
    },
    {
      path: '/my-orders',
      name: 'MyTOrders',
      component: () => import('../components/pages/ComingSoon.vue')
    },
    {
      path: '/my-interview',
      name: 'MyInterview',
      component: () => import('../components/pages/ComingSoon.vue')
    },
    {
      path: '/candidate-db',
      name: 'CandidateDatabase',
      component: () => import('../components/pages/ComingSoon.vue')
    },
    {
      path: '/my-account',
      name: 'MyAccount',
      component: () => import('../components/pages/ComingSoon.vue')
    },
    {
      path: '/access-the-world',
      name: 'AccessTheWorld',
      component: () => import('../components/pages/AccessTheWorld.vue')
    },
  ]
})

export default router
