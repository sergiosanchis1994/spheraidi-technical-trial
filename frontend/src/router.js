import Vue from 'vue'
import Router from 'vue-router'
import ChatComponent from './components/Chat.vue'

Vue.use(Router)

export const appRoutes = new Router({
  routes: [
    { path: '/', component: ChatComponent, name: 'chat' },
    { path: '*', redirect: { name: 'chat'} }
  ],
  mode: 'history'
})
