import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

export default new Router({
    routes: [

        {
            path: '/annonces/online',
            name: 'Offres en ligne',
            component: () => import('./sources/UI/Views/Annonces/GestionAnnonceOnline'),
        },

        {
            path: '/annonceurs/',
            name: 'Gestion des annonceurs',
            component: () => import('./sources/UI/Views/Annonceurs/GestionAnnonceurs'),
        },

        {
            path: '/create/',
            name: 'Créer une annonce',
            component: () => import('./sources/UI/Views/Annonces/CreateAnnonce'),
        },

        {
            path: '/faq/',
            name: 'FAQ',
            component: () => import('./sources/UI/Views/FAQ.vue'),
        },

        {
            path: '/account/',
            name: 'Compte',
            component: () => import('./sources/UI/Views/Account/Account.vue'),
        },
        {
            path: '/annonces/history',
            name: 'Offres archivées',
            component: () => import('./sources/UI/Views/Annonces/GestionAnnonceHistory.vue'),
        },

        {
            path: '/',
            name: 'login-boxed',
            meta: {layout: 'userpages'},
            component: () => import('./sources/UI/Views/Login/LoginBoxed.vue'),
        },

        {
            path: '/params/',
            name: 'login-boxed',
            component: () => import('./sources/UI/Views/Account/Parametres.vue'),
        },

        {
            path: '/register',
            name: 'register-boxed',
            meta: {layout: 'userpages'},
            component: () => import('./sources/UI/Views/Login/RegisterBoxed.vue'),
        },
        {
            path: '/forgot-password',
            name: 'forgot-password',
            meta: {layout: 'userpages'},
            component: () => import('./sources/UI/Views/Login/ForgotPassword.vue'),
        }
    ]
})
