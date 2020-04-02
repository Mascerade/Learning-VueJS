<template>
    <li @click="serverClick()" class="list-group-item">
        Server #{{ id }}
    </li>
</template>


<script>
import {eventBus} from '../../main.js'
export default {
    props: ['id', 'status'],
    methods: {
        serverClick() {
            console.log("clicked")
            eventBus.displayServer(this.id, this.status);
        }
    }
}
</script>

<style>
    
</style>