import Vue from 'vue'
import router from './router'

import BootstrapVue from "bootstrap-vue"

import App from './App'

import Default from './DemoPages/Views/Wrappers/baseLayout.vue';
import Pages from './DemoPages/Views/Wrappers/pagesLayout.vue';

Vue.config.productionTip = false;

Vue.use(BootstrapVue);

Vue.component('default-layout', Default);
Vue.component('userpages-layout', Pages);

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
});
