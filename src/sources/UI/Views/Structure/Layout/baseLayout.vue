<template>
    <div class="app-container app-theme-white">
        <transition name="fade" mode="out-in" appear>
            <Header />
        </transition>
        <transition name="fade" mode="out-in" appear>
            <Sidebar />
        </transition>
        <div class="app-main__outer">
            <div class="app-main__inner">
                <slot></slot>
            </div>
            <transition name="fade" mode="out-in" appear>
                <Footer/>
            </transition>
        </div>

    </div>
</template>

<script>

    import Header from "../Header";
    import Sidebar from "../Sidebar";
    import Footer from "../Footer";

    import {library} from '@fortawesome/fontawesome-svg-core'
    import {faCog,} from '@fortawesome/free-solid-svg-icons'
    import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

    library.add(
        faCog,
    );
    export default {
        name: 'app',
        components: {
            Header,
            Sidebar,
            Footer
        },
        methods: {
        },
    }
</script>
