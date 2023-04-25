import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import vuetify from './plugins/vuetify'


Vue.config.productionTip = false
Vue.prototype.$axios = axios
Vue.prototype._baseUrl = "http://localhost:8080/runup/";
axios.defaults.withCredentials = false;
window.Kakao.init("06f7105ea41620c32847d4b04c882f9b")
new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')