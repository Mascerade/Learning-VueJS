new Vue({
    // Link this Vue instance to the div made in the HTML
    el: '#app',
    data: {
        title: 'Hello World!'
    },

    methods: {
        // The event contains info about the object coming to it
        changeTitle: function(event) {
            // The textbox is the target, and we already know textboxes have a property of value
            this.title = event.target.value;
        }
    }
});