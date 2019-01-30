<template>
    <div class="container">
        <div class="row">
            <app-header></app-header>
        </div>
        <hr>
        <div class="row">
            <app-servers></app-servers>
        </div>
        <hr>
        <div class="row">
            <app-footer></app-footer>
        </div>
    </div>
</template>

<script>
    import Header from './components/shared/Header.vue'
    import Footer from './components/shared/Footer.vue'
    import Servers from './components/server/Servers.vue'

    export default {
        components: {
            AppHeader: Header,
            AppFooter: Footer,
            AppServers: Servers
        }
    }
</script>

<style>

</style>