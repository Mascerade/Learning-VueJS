<template>
    <div class="component">
        <h3>You may edit the User here</h3>
        <p>Edit me!</p>
        <p>Age is: {{ age }}</p>
        <button @click="setNewAge">Change Age!</button>
    </div>
</template>

<script>
import { eventBus } from '../main'
export default {
    props: ['age'],
    methods: {
        setNewAge() {
            this.age = 30;
            // this.$emit('ageChange', this.age);
            // eventBus.$emit('ageChanged', this.age);
            eventBus.changeAge(this.age)
        }
    }
}
</script>

<style scoped>
    div {
        background-color: lightgreen;
    }
</style>
