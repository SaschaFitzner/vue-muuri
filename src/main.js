import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import VueMuuri from 'vue-muuri'
import 'vue-muuri/dist/vue-muuri.css'

Vue.use(VueMuuri)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
