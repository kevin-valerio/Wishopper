<template>
    <div class="app-sidebar sidebar-shadow" @mouseover="toggleSidebarHover('add','closed-sidebar-open')" @mouseleave="toggleSidebarHover('remove','closed-sidebar-open')">

        <div class="app-sidebar-content">
            <VuePerfectScrollbar class="app-sidebar-scroll" v-once>
                <sidebar-menu showOneChild :menu="menu"/>
            </VuePerfectScrollbar>
        </div>

    </div>
</template>

<script>
import {SidebarMenu} from 'vue-sidebar-menu'
import VuePerfectScrollbar from 'vue-perfect-scrollbar'

export default {
        components: {
            SidebarMenu,
            VuePerfectScrollbar
        },
        data() {
            return {
                isOpen: false,
                sidebarActive: false,

                menu: [
                    {
                        header: true,
                        title: 'Annonces',
                    },
                    {
                        icon: 'pe-7s-upload',
                        title: 'Créer une annonce',
                        href: '/create/',
                    },
                    {
                        title: 'Gestion des annonces',
                        icon: 'pe-7s-note2',

                        child: [
                            {

                                href: '/annonces/online',
                                title: 'Offres en ligne',

                            },
                            {
                                href: '/annonces/history',
                                title: 'Annonces archivées',
                                disabled: true,

                            },
                        ]


                    },

                    {
                        header: true,
                        title: 'Organisation',
                    },

                    {
                        icon: 'pe-7s-portfolio',
                        title: 'Gestion des enseignes',
                        href: '/annonceurs/',
                    },


                    {
                        header: true,
                        title: 'Informations',
                    },


                    {
                        icon: 'pe-7s-id',
                        title: 'Compte',
                        href: '/account/',
                    },

                    {
                        icon: 'pe-7s-wallet',
                        title: 'Portefeuille',
                        href: '/wallet/',
                    },

                    {
                        title: 'Statistiques',
                        icon: 'pe-7s-graph2',
                        href: '/stats/',
                        disabled: true,

                    },
                    {
                        icon: 'pe-7s-info ',
                        title: 'FAQ',
                        href: '/faq/',
                    },

                ],
                showChild: {
                    type: Boolean,
                    default: true
                },
                collapsed: true,
                windowWidth: 0,

            }
        },
        props: {
            sidebarbg: String,

        },
        methods: {

            toggleBodyClass(className) {
                const el = document.body;
                this.isOpen = !this.isOpen;

                if (this.isOpen) {
                    el.classList.add(className);
                } else {
                    el.classList.remove(className);
                }
            },
            toggleSidebarHover(add, className) {
                const el = document.body;
                this.sidebarActive = !this.sidebarActive;

                this.windowWidth = document.documentElement.clientWidth;

                if (this.windowWidth > '992') {
                    if (add === 'add') {
                        el.classList.add(className);
                    } else {
                        el.classList.remove(className);
                    }
                }
            },
            getWindowWidth() {
                const el = document.body;

                this.windowWidth = document.documentElement.clientWidth;

                if (this.windowWidth < '1350') {
                    el.classList.add('closed-sidebar', 'closed-sidebar-md');
                } else {
                    el.classList.remove('closed-sidebar', 'closed-sidebar-md');
                }
            },
        },
        mounted() {
            this.$nextTick(function () {
                window.addEventListener('resize', this.getWindowWidth);

                //Init
                this.getWindowWidth()
            })
        },

        beforeDestroy() {
            window.removeEventListener('resize', this.getWindowWidth);
        }
    }
</script>
