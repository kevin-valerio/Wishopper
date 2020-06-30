import Vue from 'vue'
import router from './router'
import Axios from 'axios'
import BootstrapVue from "bootstrap-vue"
import App from './App'
import VModal from 'vue-js-modal'
import Default from './sources/UI/Views/Structure/Layout/baseLayout.vue';
import Pages from './sources/UI/Views/Structure/Layout/pagesLayout.vue';


Vue.config.productionTip = false;
Vue.prototype.$http = Axios;

Vue.use(BootstrapVue);
Vue.use(VModal)

Vue.component('default-layout', Default);
Vue.component('userpages-layout', Pages);

new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: {App}
});
