import Vue from 'vue'
import App from './App.vue'
import Servers from './components/Servers.vue'
import ServerDetails from './components/ServerDetails.vue'
import Footer from './components/Footer.vue'
import Header from './components/Header'

Vue.component('my-servers', Servers)
Vue.component('my-server-details', ServerDetails)
Vue.component('my-footer', Footer)
Vue.component('my-header', Header)
new Vue({
  el: '#app',
  render: h => h(App)
})
