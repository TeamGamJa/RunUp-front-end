import Vue from 'vue'
import Router from 'vue-router'
import LoginView from '../views/LoginView'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/login',
      name: 'login',
      component: LoginView,
    }
  ]
  
})

