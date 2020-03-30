new Vue({
    el: '#exercise',
    data: {
        value: 0
    },

    watch: {
        result: function() {
            vm = this;
            setTimeout(function() {
                vm.value = 0;
            }, 5000)
        }
    },

    computed: {
        result: function() {
            if (this.value != 37) {
                return "not there yet";
            }
            else {
                return "done"
            }
        }
    }
});