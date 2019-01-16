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

<!-- QUOTES - App.vue
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
</style>-->
<template>
    <div class="container">
        <form>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <!-- Exercise 1 -->
                    <!-- Create a Signup Form where you retrieve the following Information -->
                    <!-- Full Name (First Name + Last Name) -->
                    <!-- Mail -->
                    <!-- Password -->
                    <!-- Store Data? Yes/No -->
                    <div class="form-group">
                        <label for="firstName">
                            First Name
                            <input
                                type="text"
                                id="firstName"
                                class="form-control"
                                v-model="firstName">
                        </label>
                    </div>
                    <div class="form-group">
                        <label for="lastName">
                            Last Name
                            <input
                                type="text"
                                id="lastName"
                                class="form-control"
                                v-model="lastName">
                        </label>
                    </div>
                    <div class="form-group">
                        <label for="email">
                            Email
                            <input
                                type="text"
                                id="email"
                                class="form-control"
                                v-model="email">
                        </label>
                    </div>
                    <div class="form-group">
                        <label for="password">
                            Password
                            <input
                                type="password"
                                id="password"
                                class="form-control"
                                v-model="password">
                        </label>
                    </div>
                    <div class="row">
                        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group">
                            <p>Store data?</p>
                            <label for="yes">
                                <input
                                    type="radio"
                                    id="yes"
                                    value="Yes"
                                    v-model="storeData"> Yes
                            </label>
                            <label for="no">
                                <input
                                    type="radio"
                                    id="no"
                                    value="No"
                                    v-model="storeData"> No
                            </label>
                        </div>
                    </div>
                    <button
                            type="submit"
                            @click.prevent="showForm = true"
                            class="btn btn-primary"
                    >Submit</button>

                    <!-- Exercise 2 -->
                    <!-- Only display the Form if it has NOT been submitted -->
                    <!-- Display the Data Summary ONCE the Form HAS been submitted -->

                    <!-- Exercise 3 -->
                    <!-- Edit the Example from above and create a custom "Full Name" Control -->
                    <!-- which still holds the First Name and Last Name Input Field -->
                </div>
            </div>
        </form>
        <hr>
        <div class="row" v-if="showForm">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4>Your Data</h4>
                    </div>
                    <div class="panel-body">
                        <app-full-name :firstName="firstName" :lastName="lastName"></app-full-name>
                        <p>Mail: {{email}}</p>
                        <p>Password: {{password}}</p>
                        <p>Store in Database?: {{storeData}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import FullName from './components/loginForm/FullName.vue'
    export default {
        components: {
          appFullName: FullName
        },
        data() {
            return {
                firstName: '',
                lastName: '',
                email: '',
                password: '',
                storeData: 'Yes',
                showForm: false
            }
        }
    }
</script>

<style>
</style>