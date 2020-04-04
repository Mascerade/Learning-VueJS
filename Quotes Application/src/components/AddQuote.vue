<template>
    <div style="margin-top: 5%;">
        <h5>Add Quote: </h5>
        <input id="quote-input" class="form-control form-control-lg" type="text" placeholder="Enter Quote!" v-model="userQuote">
        <button @click="addQuote()" class="btn btn-primary">Add Quote</button>
    </div>
</template>

<script>
import {eventBus} from '../main.js'
export default {
    data: function() {
        return {
            // Used for the id of the quote
            totalQuotesAdded: 0,
            userQuote: ""
        }
    },

    methods: {
        addQuote() {
            if (this.userQuote != '') {
                this.totalQuotesAdded += 1
                eventBus.addQuote({id: this.totalQuotesAdded, quote: this.userQuote});
            }
            else {
                alert("Cannot be blank quote!")
            }
        }
    }

}
</script>

<style scoped>
    div {
        display: flex;
        flex-flow: column;
        align-items: center;
    }

    button {
        margin-top: 3%;
    }

    #quote-input {
        width: 80%;
    }
</style>