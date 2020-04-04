import Vue from 'vue'
import App from './App.vue'

export const eventBus = new Vue({
  data: {

  },

  methods: {
    addQuote(quoteObj) {
      console.log("emitting message");
      this.$emit('addQuote', quoteObj);
    },
    deleteQuote(quoteId) {
      this.$emit('deleteQuote', quoteId)
    }
  }
});

new Vue({
  el: '#app',
  render: h => h(App)
})
