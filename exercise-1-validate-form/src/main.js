import Vue from 'vue'
import VeeValidate from "vee-validate";
import App from './App.vue'
import store from './store/index'

import './tailwind.css'

Vue.use(VeeValidate);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store,
}).$mount('#app')
