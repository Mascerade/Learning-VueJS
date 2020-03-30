import Vue from 'vue'
import App from './App.vue'
import Servers from './Servers.vue'
import ServerDetails from './ServerDetails.vue'
import Footer from './Footer.vue'
import Header from './Header'

Vue.component('my-servers', Servers)
Vue.component('my-server-details', ServerDetails)
Vue.component('my-footer', Footer)
Vue.component('my-header', Header)
new Vue({
  el: '#app',
  render: h => h(App)
})
