<template>
    <div style="margin-top: 5%;" class="row">
        <app-quote-card v-for="quote in cards" :quoteObj="quote"></app-quote-card>
    </div>
</template>


<script>
import {eventBus} from '../main.js'
import QuoteCard from './QuoteCard.vue'
export default {
    data: function () {
        return {
            cards: []
        }
    },
    components: {
        'app-quote-card': QuoteCard
    },

    created() {
        eventBus.$on('addQuote', (quoteObj) => {
            console.log(this.cards.length)
            if (this.cards.length < 10) {
                this.cards.push(quoteObj);
            }
            else {
                alert("You are at the max amount of quotes you can add!")
            }
        });
        eventBus.$on('deleteQuote', (quoteId) => {
            for (var i = 0; i < this.cards.length; i++) {
                if (this.cards[i].id == quoteId) {
                    this.cards.splice(i, 1);
                }
            }
        });
    }
}
</script>

<style>
    
</style>