import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        // {
        //   path: '/',
        //   name: 'AccessTheWorld',
        //   component: () => import('../components/pages/AccessTheWorld.vue')
        // },
        // {
        //   path: '/login',
        //   name: 'Login',
        //   component: () => import('../components/authentication/Login.vue')
        // },
        {
            path: '/client',
            name: 'Client',
            component: () =>
                import ('../components/pages/client/Client.vue'),
            children: [{
                    path: 'v2',
                    name: 'Version2',
                    children: [{
                            path: 'dashboard/persona1',
                            name: 'Persona1',
                            component: () =>
                                import ('../components/pages/client/dashboard/Persona1.vue')
                        },
                        {
                            path: 'dashboard/persona2',
                            name: 'Persona2',
                            component: () =>
                                import ('../components/pages/client/dashboard/Persona2.vue')
                        },
                        {
                            path: 'dashboard/persona3',
                            name: 'Persona3',
                            component: () =>
                                import ('../components/pages/client/dashboard/Persona3.vue')
                        },
                        {
                            path: 'my-talent',
                            name: 'MyTalent',
                            component: () =>
                                import ('../components/pages/ComingSoon.vue')
                        },
                        {
                            path: 'skillscanner',
                            name: 'SkillScanner',
                            component: () =>
                                import ('../components/pages/client/SkillScanner.vue')
                        },
                        {
                            path: 'my-orders',
                            name: 'MyTOrders',
                            component: () =>
                                import ('../components/pages/ComingSoon.vue')
                        },
                        {
                            path: 'my-interview',
                            name: 'MyInterview',
                            component: () =>
                                import ('../components/pages/ComingSoon.vue')
                        },
                        {
                            path: 'candidate-db',
                            name: 'CandidateDatabase',
                            component: () =>
                                import ('../components/pages/candidateDB/candidateDB.vue')
                        },
                        {
                            path: 'my-account',
                            name: 'MyAccount',
                            component: () =>
                                import ('../components/pages/client/MyAccount.vue')
                        },
                    ]
                },
                {
                    path: '',
                    name: 'EmployerLandingPage',
                    component: () =>
                        import ('../components/pages/employer/CandidateDatabaseTable.vue')
                },
                {
                    path: 'about-axpara',
                    name: 'AboutAxpara',
                    component: () =>
                        import ('../components/pages/employer/CandidateDatabase.vue')
                },
                {
                    path: 'candidate-db-table',
                    name: 'CandidateDatabaseTable',
                    component: () =>
                        import ('../components/pages/employer/CandidateDatabaseTable.vue')
                },
            ]
        },
    ]
})

export default router