import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

export default new Router({
    scrollBehavior() {
        return window.scrollTo({top: 0, behavior: 'smooth'});
    },
    routes: [



        {
            path: '/annonces/online',
            name: 'Offres en ligne',
            component: () => import('../DemoPages/Views/Annonces/GestionAnnonceOnline.vue'),
        },

  {
            path: '/faq/',
            name: 'FAQ',
            component: () => import('../DemoPages/Views/FAQ.vue'),
        },

        {
            path: '/account/',
            name: 'Compte',
            component: () => import('../DemoPages/Views/Account/Account.vue'),
        },
        {
            path: '/annonces/history',
            name: 'Offres archivées',
            component: () => import('../DemoPages/Views/Annonces/GestionAnnonceHistory.vue'),
        },

        {
            path: '/',
            name: 'login-boxed',
            meta: {layout: 'userpages'},
            component: () => import('../DemoPages/Views/Account/LoginBoxed.vue'),
        },
        {
            path: '/register',
            name: 'register-boxed',
            meta: {layout: 'userpages'},
            component: () => import('../DemoPages/Views/Account/RegisterBoxed.vue'),
        },
        {
            path: '/forgot-password',
            name: 'forgot-password',
            meta: {layout: 'userpages'},
            component: () => import('../DemoPages/Views/Account/ForgotPassword.vue'),
        }
    ]
})
