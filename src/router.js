import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

let router = new Router({

    routes: [

        {
            path: '/annonces/online',
            name: 'Offres en ligne',
            meta: {
                requiresAuth: true
            },
            component: () => import('./sources/UI/Views/Annonces/GestionAnnonceOnline'),
        },

        {
            path: '/annonceurs/',
            name: 'Gestion des enseignes',
            meta: {
                requiresAuth: true,
                // is_admin: true
            },
            component: () => import('./sources/UI/Views/Annonceurs/GestionAnnonceurs'),
        },

        {
            path: '/create/',
            name: 'Créer une annonce',
            meta: {
                requiresAuth: true
            },
            component: () => import('./sources/UI/Views/Annonces/CreateAnnonce'),
        },

        {
            path: '/annonces/edit/:id',
            name: 'Editer une annonce',
            meta: {
                requiresAuth: true
            },
            component: () => import('./sources/UI/Views/Annonces/EditAnnonce'),
        },

        {
            path: '/faq/',
            name: 'FAQ',
            meta: {
                guest: true
            },
            component: () => import('./sources/UI/Views/Misc/FAQ.vue'),
        },

        {
            path: '/account/',
            name: 'Compte',
            meta: {
                requiresAuth: true
            },
            component: () => import('./sources/UI/Views/Account/Account.vue'),
        },
        {
            path: '/annonces/history',
            name: 'Offres archivées',
            meta: {
                requiresAuth: true
            },
            component: () => import('./sources/UI/Views/Annonces/GestionAnnonceHistory.vue'),
        },

        {
            path: '/',
            name: 'login-boxed',
            meta: {layout: 'userpages', guest: true},

            component: () => import('./sources/UI/Views/Login/LoginBoxed.vue'),
        },

        {
            path: '/register',
            name: 'register-boxed',
            meta: {layout: 'userpages', guest: true},
            component: () => import('./sources/UI/Views/Login/RegisterBoxed.vue'),
        },
        {
            path: '/forgot-password',
            name: 'forgot-password',
            meta: {layout: 'userpages', guest: true},
            component: () => import('./sources/UI/Views/Login/ForgotPassword.vue'),
        }
    ],
    mode: 'history'

});

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (localStorage.getItem('access_token') == null) {
            next({
                path: '/',
                params: {nextUrl: to.fullPath}
            })
        } else {
            let user = JSON.parse(localStorage.getItem('user'))
            if (to.matched.some(record => record.meta.is_admin)) {
                if (user.is_admin == 1) {
                    next()
                } else {
                    next({name: 'Offres en ligne'})
                }
            } else {
                next()
            }
        }
    } else {
        next()
    }
})

export default router

