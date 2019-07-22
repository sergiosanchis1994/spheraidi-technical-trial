import Vue from 'vue'
import App from './App'
import { appRoutes } from './router'

Vue.config.productionTip = false
Vue.co

new Vue({
  el: '#app',
  router: appRoutes,
  components: { App },
  template: '<App/>'
})
