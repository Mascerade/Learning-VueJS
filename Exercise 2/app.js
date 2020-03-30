new Vue({
    el: '#exercise',
    data: {
        value: ''
    },

    methods: {
        buttonPress: function(event) {
            alert("Hola!")
        },

        storeVal: function(event) {
            this.value = event.target.value;
        }
    }
});