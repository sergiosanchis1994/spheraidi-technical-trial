import Vue from 'vue'
import Router from 'vue-router'
import ChatComponent from './components/Chat.vue'
import LoginComponent from './components/Login.vue'

Vue.use(Router)

export const appRoutes = new Router({
  routes: [
    { path: '/chat', component: ChatComponent, name: 'chat' },
    { path: '/login', component: LoginComponent, name: 'login' },
    { path: '*', redirect: { name: 'login'} }
  ],
  mode: 'history'
})
