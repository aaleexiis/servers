<!-- servers-App.vue
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
-->

<!-- COLORS - App.vue
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
</style>-->

<template>
    <div class="container">
        <app-progress-bar
                :quoteCount="quotes.length"
                :maxQuotes="maxQuotes"
        ></app-progress-bar>
        <app-new-quote
                @quoteAdded="addNewQuote"
        ></app-new-quote>
        <app-quote-grid
                :quotes="quotes"
                @quoteDeleted="deleteQuote"
        ></app-quote-grid>
        <div class="row">
            <div class="col-sm-12 text-center">
                <div class="alert alert-info">Info: Click on a Quote to delete it</div>
            </div>
        </div>
        <div v-if="quotes.length >= maxQuotes" class="row">
            <div class="col-sm-12 text-center">
                <div class="alert alert-danger">You have {{maxQuotes}} quotes!</div>
            </div>
        </div>
    </div>
</template>

<script>
    import QuoteGrid from './components/quotes/QuoteGrid.vue';
    import ProgressBar from './components/quotes/ProgressBar.vue'
    import NewQuote from './components/quotes/NewQuote.vue'

    export default {
        components: {
            appQuoteGrid: QuoteGrid,
            appProgressBar: ProgressBar,
            appNewQuote: NewQuote
        },
        data: function () {
            return {
                maxQuotes: 10,
                quotes: ['Ivica', 'Marica']
            }
        },
        methods: {
            addNewQuote(quote){
                if(this.quotes.length < this.maxQuotes){
                    this.quotes.push(quote);
                }
            },
            deleteQuote(index){
                this.quotes.pop(index);
            }
        }
    }
</script>

<style>
</style>