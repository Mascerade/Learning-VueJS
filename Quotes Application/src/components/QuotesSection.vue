<template>
    <div style="margin-top: 5%;" class="row">
        <app-quote-card v-for="quote in cards" :quoteObj="quote"></app-quote-card>
    </div>
</template>


<script>
import QuoteCard from './QuoteCard.vue'
export default {
    data: function () {
        return {
            cards: [{quote: "Some quote"}, {quote: "Another quote"}, {quote: "Final quote"}, {quote: "Some quote"}, {quote: "Another quote"}, {quote: "Final quote"}]
        }
    },
    components: {
        'app-quote-card': QuoteCard
    }
}
</script>

<style>
    
</style>