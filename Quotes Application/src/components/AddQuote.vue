<template>
    <div style="margin-top: 5%;">
        <h5>Add Quote: </h5>
        <input id="quote-input" class="form-control form-control-lg" type="text" placeholder="Enter Quote!" v-model="userQuote">
        <button class="btn btn-primary">Add Quote</button>
    </div>
</template>

<script>
export default {
    data: function() {
        return {
            userQuote: ""
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