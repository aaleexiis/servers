<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <br>
                <button class="btn btn-primary" @click="selectedTemplate = 'appBlue'">Load Blue Template</button>
                <button class="btn btn-success" @click="selectedTemplate = 'appGreen'">Load Green Template</button>
                <button class="btn btn-danger" @click="selectedTemplate = 'appRed'">Load Red Template</button>
                <hr>
                &lt;!&ndash; <app-blue>
                <h1 slot="header">Blue</h1>
                <p slot="paragraph">template</p>
            </app-blue>
                <app-green>
                    <p>Green</p>
                </app-green>
                <app-red>
                    <p>Red</p>
                </app-red>&ndash;&gt;
                <component :is="selectedTemplate"></component>
            </div>
        </div>
    </div>
</template>

<script>
    import Blue from './components/colors/Blue.vue';
    import Green from './components/colors/Green.vue';
    import Red from './components/colors/Red.vue';

    export default {
        components: {
            appBlue: Blue,
            appGreen: Green,
            appRed: Red
        },
        data () {
            return {
                selectedTemplate: 'appBlue'
            }
        }
    }
</script>

<style>
</style>