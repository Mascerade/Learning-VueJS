<template>
    <div class="col-xs-12 col-sm-6">
        <ul class="list-group">
            <app-sli v-for="server in servers" :id="server.id" :status="server.status"> </app-sli>
        </ul>
    </div>
</template>

<script>
    import ServerListItem from './ServerListItem.vue' 
    export default {
        data: function() {
            return {
                servers: [
                    {id: 1, status: 'Normal'},
                    {id: 2, status: 'Critical'},
                    {id: 3, status: 'Unknown'},
                    {id: 4, status: 'Normal'},
                    {id: 5, status: 'Critical'}
                ]
            }
        },
        components: {
            'app-sli': ServerListItem
        }
    }
</script>

<style>

</style>
