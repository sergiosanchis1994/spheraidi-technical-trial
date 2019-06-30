import Vue from 'vue'
import App from './App'
import { appRoutes } from './router'
// import VueWebsocket from "vue-websocket"

Vue.config.productionTip = false

// Vue.use(VueWebsocket, "ws:/user");

new Vue({
  el: '#app',
  router: appRoutes,
  components: { App },
  template: '<App/>'
})
