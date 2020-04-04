<template>
    <div @click="deleteCard()" class="card col-md-3 text-secondary">
        {{ quoteObj.quote }}        
    </div>
</template>

<script>
import {eventBus} from '../main.js'
export default {
    props: ['quoteObj'],
    methods: {
        deleteCard() {
            eventBus.deleteQuote(this.quoteObj.id)
        }
    }
}
</script>

<style>
    .card {
        font-family: 'Arizonia';
        font-size: 30px;
        padding: 10px;
        margin-top: 2%;
        margin-left: 10px;
        margin-right: 10px;
        border: 2px solid #ededed;
    }
</style>