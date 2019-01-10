<template>
    <div>
        Server {{server.id}} selected. Status: {{ server.status }}
        <hr v-if="server.status !== 'Normal'"/>
        <button v-if="server.status !== 'Normal'" @click="switchToNormal()">Change to Normal</button>
    </div>
</template>
<script>
    import { eventBus } from './../../main'
    export default {
        props: {
            server: {
                type: Object,
                required: true
            }
        },
        methods: {
            switchToNormal() {
                eventBus.$emit('switchToNormal', this.server);
            }
        }
    }
</script>