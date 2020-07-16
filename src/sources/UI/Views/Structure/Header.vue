<template>
    <div class="app-header header-shadow">
<!--        <div class="logo-src"/>-->
        <div class="app-header__content">

            <div class="app-header-right">
                <UserArea/>
            </div>
        </div>
        <div class="app-header__mobile-menu">
            <div>
                <button type="button" class="hamburger close-sidebar-btn hamburger--elastic" v-bind:class="{ 'is-active' : isOpen }" @click="toggleMobile('closed-sidebar-open')">
                    <span class="hamburger-box">
                        <span class="hamburger-inner"></span>
                    </span>
                </button>
            </div>
        </div>
    </div>
</template>

<script>

    // eslint-disable-next-line no-unused-vars
    import UserArea from './HeaderUserArea';

    import {library} from '@fortawesome/fontawesome-svg-core'
    import {faEllipsisV,} from '@fortawesome/free-solid-svg-icons'
    import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'

    library.add(
        faEllipsisV,
    );
    export default {
        name: "Header",
        components: {
            // SearchBox,
            UserArea,
            'font-awesome-icon': FontAwesomeIcon,
        },

        data() {
            return {
                isOpen: false,
                isOpenMobileMenu: false,
            }
        },
        props: {


        },
        methods: {
            toggleMobile(className) {
                const el = document.body;
                this.isOpen = !this.isOpen;

                if (this.isOpen) {
                    el.classList.add(className);
                } else {
                    el.classList.remove(className);
                }
            },

            toggleMobile2(className) {
                const el = document.body;
                this.isOpenMobileMenu = !this.isOpenMobileMenu;

                if (this.isOpenMobileMenu) {
                    el.classList.add(className);
                } else {
                    el.classList.remove(className);
                }
            },
        }
    };
</script>
