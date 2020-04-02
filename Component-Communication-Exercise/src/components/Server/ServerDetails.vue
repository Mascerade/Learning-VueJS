<template>
    <div class="col-xs-12 col-sm-6">
        <p>{{gotMessage}}</p>
        <p v-if="!gotMessage">Server Details are currently not updated</p>
        <p v-else>Server #{{id}} is currently operating: {{ status }}</p>
    </div>

</template>

<script>
import {eventBus} from '../../main.js'
export default {
    data: function () {
        return {
            id: null,
            status: null,
            gotMessage: false
        }
    },

    created() {
        eventBus.$on('changeServerDisplay', (id, status) => {
            console.log("got message")
            this.id = id;
            this.status = status;
            this.gotMessage = true;
        });
    }
}
</script>

<style>

</style>
