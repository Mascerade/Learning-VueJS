<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>User Name: {{ switchName() }}</p>
        <p>User Age: {{ age }}</p>
        <button @click="resetName">Reset Name</button>
        <button @click="resetFn">Reset Name</button>
    </div>
</template>

<script>
    import { eventBus } from '../main'
    export default {

        // Validate the type of value coming in from the parent
        // Required makes sure that a value HAS to be passed
        props: {
            name: {
                type: String,
                default: "J. Cole"
                // required: true
            },

            age: {
                type: Number
            },

            resetFn: {
                type: Function
            }
        },
        methods: {
            switchName() {
                return this.name.split("").reverse().join("");
            },
            resetName() {
                this.name = "Kojo";
                this.$emit('nameWasReset', this.name);
            }
        },
        created() {
            eventBus.$on('ageChanged', (age) => {
                this.age = age;
            });
        }
    }
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
