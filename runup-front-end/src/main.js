import { createApp } from 'vue'
import App from './App.vue'
import router from "./router/index" // vue-router
import axios from 'axios'
import store from '@/store/index'
import globalmethod from './plugins/GlobalMethods';
import Vuex from 'vuex'

const app = createApp(App); 

app.config.globalProperties.$axios = axios;
app.use(Vuex);
app.use(store);
app.use(globalmethod);
app.use(router); // vue-router , 이 use가 mount 위에 있어야지 정상적인 작동이 가능하다.
app.mount('#app')
