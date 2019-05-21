import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
import {
  Alert,
  Radio
} from 'element-ui'
Vue.use(Alert)
// Vue.use(Radio)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')