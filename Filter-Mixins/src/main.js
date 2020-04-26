import Vue from 'vue'
import App from './App.vue'

Vue.filter('to-lowercase', function(value) {
  return value.toLowerCase();
});

var app = new Vue({
  el: '#app',
  render: h => h(App)
})
