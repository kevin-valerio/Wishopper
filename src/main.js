import Vue from 'vue'
import router from './router'

import BootstrapVue from "bootstrap-vue"

import App from './App'

import Default from './sources/UI/Views/Structure/Layout/baseLayout.vue';
import Pages from './sources/UI/Views/Structure/Layout/pagesLayout.vue';

import Vuetify from 'vuetify/lib'

Vue.config.productionTip = false;

Vue.use(BootstrapVue);
Vue.use(Vuetify)

Vue.component('default-layout', Default);
Vue.component('userpages-layout', Pages);

new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: {App}
});
