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
        <!-- Modal Component -->
        <b-modal id="getCode" size="lg"   title="Obtention du code">
           <div  >
            <button @click="getCode()" class="btn btn-primary">Récuperer le code </button>
            <p v-if="this.code != null">Le code est le suivant : <b> {{ this.code }}</b></p>
           </div>
        </b-modal>
    </div>
</template>

<script>

import {library} from '@fortawesome/fontawesome-svg-core'
import {faCog,} from '@fortawesome/free-solid-svg-icons'
import Sidebar from "@/sources/UI/Views/Structure/Sidebar";
import Header from "@/sources/UI/Views/Structure/Header";
import Footer from "@/sources/UI/Views/Structure/Footer";

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
    data: () => ({
        code: null,
    }),

    methods: {

        getCode: function(){
            const config = {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Authorization': `Bearer ${localStorage.getItem("access_token")}`
                }
            };
            this.$http.get('https://api.wishopper.com/v1/private/advertiser/organization/invite', config).then(res => {
                this.code = res.data.code;
            });
        }
    },
}
</script>
