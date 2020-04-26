<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Filters & Mixins</h1>
                <!-- Exercise 1) -->
                <!-- Build a local Filter which reverses the Text it is applied on -->
                <p>{{ someText | reversed }}</p>
                <!-- Exercise 2 -->
                <!-- Build a global Filter which counts the length of a word and it appends it -->
                <!-- Like this: "Test" => Gets Filtered to => "Test (4)" -->
                <p>{{ moreText2 }}</p>
                <!-- Exercise 3 -->
                <!-- Do the same as in  Exercises 1 & 2, now with Computed Properties -->
                <p>{{ someText2 }}</p>
                <p>{{ moreText2 }}</p>
                <!-- Exercise 4 -->
                <!-- Share the Computed Property rebuilding Exercise 2 via a Mixin -->
                <p></p>
            </div>
        </div>
    </div>
</template>

<script>
    import { mixin } from './mixin.js'
    export default {
        mixins: [mixin],
        data() {
            return {
                someText: 'Hello',
            }
        },
        filters: {
            reversed(value) {
                let endStr = '';
                let arr = Array.from(value);
                for (let i = arr.length - 1; i >= 0; i--) {
                    endStr += arr[i];
                }
                return endStr;
            }
        },
        computed: {
            someText2() {
                let endStr = '';
                let arr = Array.from(this.someText);
                for (let i = arr.length - 1; i >= 0; i--) {
                    endStr += arr[i];
                }
                return endStr;
            }
        }
    }
</script>

<style>
</style>
