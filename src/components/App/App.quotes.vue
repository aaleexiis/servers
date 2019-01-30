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