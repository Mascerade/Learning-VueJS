<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Directives Exercise</h1>
                <!-- Exercise -->
                <!-- Build a Custom Directive which works like v-on (Listen for Events) -->
                <div v-myon:mousemove="justPrint" id="someting">
                    Big Div
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        directives: {
            'myon': {
                bind(el, binding, vnode) {
                    el.addEventListener(binding.arg, binding.value)
                }
            }
        },
        
        methods: {
            justPrint() {
                console.log("Event fired")
            }
        }
    }
</script>

<style>
#someting {
    display: flex;
    padding: 100px;
    background-color: red;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 30px
}
</style>
