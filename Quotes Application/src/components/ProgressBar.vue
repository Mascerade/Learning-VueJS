<template>
    <div>
        <h2>Quotes Added</h2>
        <div id="progress-container">
            <div id="inner-progress" :style="{ width: quotesAdded * 10 + '%' }">
                {{quotesAdded}} / 10
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data: function() {
        return {
            quotesAdded: 1
        }
    }
}
</script>

<style>
    #progress-container {
        width: 100%;
        height: 20px;
        border-radius: 10px;
        background-color:#f5f5f5;
    }

    #inner-progress {
        height: 100%;
        width: 10%;
        border-radius: 10px;
        background-color:#66b5f2;
        text-align: center;
        color: white;
    }
</style>