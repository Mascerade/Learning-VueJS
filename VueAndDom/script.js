// Directive - Instruction placed in HTML code
    // v-bind for example
    // Used to bind regular html to properties to Vue

new Vue({
    // Link this Vue instance to the div made in the HTML
    el: '#app',
    data: {
        title: 'Hello World!',
        link: "https://google.com/",
        finishedLink: '<a href="https://google.com">Google</a>'
    },

    methods: {
        sayHello: function() {
            return "Hello";
        }
    }
});
