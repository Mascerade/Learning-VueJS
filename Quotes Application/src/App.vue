<template>
    <div style="margin-top: 2%;" class="container">
        <app-progressbar></app-progressbar>
        <app-add-quote></app-add-quote>
        <app-quotes-section></app-quotes-section>
    </div>
</template>

<script>
    import ProgressBar from './components/ProgressBar.vue'
    import AddQuote from './components/AddQuote.vue'
    import QuotesSection from './components/QuotesSection.vue'
    export default {
        components: {
            'app-progressbar': ProgressBar,
            'app-add-quote': AddQuote,
            'app-quotes-section': QuotesSection
        }
    }
</script>

<style>
</style>
