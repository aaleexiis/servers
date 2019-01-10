<template>
    <div>
        <div class="col-xs-12 col-sm-6">
            <ul class="list-group">
                <li
                        class="list-group-item"
                        v-for="server in servers"
                        @click="openServerStatus(server)"
                >
                    [Server #{{ server.id }}] {{server.status}}
                </li>
            </ul>
        </div>
        <div class="col-xs-12 col-sm-6">
            <p v-if="!isServerClicked">Server Details are currently not updated</p>
            <app-server-details v-else :server="clickedServer"></app-server-details>
        </div>
    </div>
</template>
<script>
    import ServerDetails from './ServerDetails.vue'
    import { eventBus } from './../../main'

    export default {
        components: {
            AppServerDetails: ServerDetails
        },
        data: function () {
            return{
                servers: [
                    {id: 1, status: 'Normal'},
                    {id: 2, status: 'Critical'},
                    {id: 3, status: 'Unknown'},
                    {id:4, status: 'Normal'}
                ],
                isServerClicked: false,
                clickedServer: {}
            }
        },
        methods: {
            openServerStatus(server) {
                this.isServerClicked = true;
                this.clickedServer = server;
            }
        },
        created () {
            const vm = this;
            eventBus.$on('switchToNormal', function (clickedServer) {
                const result = vm.servers.find( server => server.id === clickedServer.id );
                if(result.status !== 'Normal'){
                    result.status = 'Normal';
                }
            })
        }
    }
</script>