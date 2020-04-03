<template>
    <div>
        <h3>New Quote</h3>
        <button @click="counter++">Counter Button</button>
        <p>{{ counter }}</p>
    </div>
</template>

<script>
export default {
    data: function() {
        return {
            counter: 0
        };
    },
    deactivated() {
        console.log('Deactivated!');
    },
    activated() {
        console.log('activated')
    }
}
</script>

<style>

</style>