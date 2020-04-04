<template>
    <div style="margin-top: 2%;" class="container">
        <app-progressbar></app-progressbar>
        <app-add-quote></app-add-quote>
    </div>
</template>

<script>
    import ProgressBar from './components/ProgressBar.vue'
    import AddQuote from './components/AddQuote.vue'
    export default {
        components: {
            'app-progressbar': ProgressBar,
            'app-add-quote': AddQuote
        }
    }
</script>

<style>
</style>
