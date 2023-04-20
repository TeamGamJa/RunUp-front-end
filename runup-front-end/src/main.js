import { createApp } from 'vue'
import App from './App.vue'
import router from "./router/index" // vue-router
import axios from 'axios'
import store from '@/store/index'
import globalmethod from './plugins/GlobalMethods';
import { defineRule, configure } from 'vee-validate';
import { required, email } from '@vee-validate/rules';
import { Field, Form, ErrorMessage } from 'vee-validate';


const app = createApp(App); 

app.component('FormField', Field);
app.component('FormWrapper', Form);
app.component('ErrorMessage', ErrorMessage);


defineRule('required', required);
defineRule('email', email);

configure({
  validateOnInput: true,
});

app.config.globalProperties.$axios = axios;
app.config.globalProperties.baseUrl = "http://localhost:8080/runup/";
window.Kakao.init("06f7105ea41620c32847d4b04c882f9b")
app.use(store);
app.use(globalmethod);
app.use(router); // vue-router , 이 use가 mount 위에 있어야지 정상적인 작동이 가능하다.
app.mount('#app')