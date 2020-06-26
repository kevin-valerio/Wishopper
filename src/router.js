import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

export default new Router({
    routes: [

        {
            path: '/annonces/online',
            name: 'Offres en ligne',
            component: () => import('./sources/Views/Annonces/GestionAnnonceOnline'),
        },

        {
            path: '/annonceurs/',
            name: 'Gestion des annonceurs',
            component: () => import('./sources/Views/Annonceurs/GestionAnnonceurs'),
        },

        {
            path: '/create/',
            name: 'Créer une annonce',
            component: () => import('./sources/Views/Annonces/CreateAnnonce'),
        },

        {
            path: '/faq/',
            name: 'FAQ',
            component: () => import('./sources/Views/FAQ.vue'),
        },

        {
            path: '/account/',
            name: 'Compte',
            component: () => import('./sources/Views/Account/Account.vue'),
        },
        {
            path: '/annonces/history',
            name: 'Offres archivées',
            component: () => import('./sources/Views/Annonces/GestionAnnonceHistory.vue'),
        },

        {
            path: '/',
            name: 'login-boxed',
            meta: {layout: 'userpages'},
            component: () => import('./sources/Views/Login/LoginBoxed.vue'),
        },

        {
            path: '/params/',
            name: 'login-boxed',
            component: () => import('./sources/Views/Account/Parametres.vue'),
        },

        {
            path: '/register',
            name: 'register-boxed',
            meta: {layout: 'userpages'},
            component: () => import('./sources/Views/Login/RegisterBoxed.vue'),
        },
        {
            path: '/forgot-password',
            name: 'forgot-password',
            meta: {layout: 'userpages'},
            component: () => import('./sources/Views/Login/ForgotPassword.vue'),
        }
    ]
})
