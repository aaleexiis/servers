<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Filters & Mixins</h1>
                <!-- Exercise 1) -->
                <!-- Build a local Filter which reverses the Text it is applied on -->
                <div class="row">
                    <input type="text" v-model="text1"/>
                </div>
                <div class="row">
                    Filter {{text1 | reverseText}}
                </div>
                <div class="row">
                    Computed {{text1Computed}}
                </div>

                <hr/>

                <!-- Exercise 2 -->
                <!-- Build a global Filter which counts the length of a word and it appends it -->
                <!-- Like this: "Test" => Gets Filtered to => "Test (4)" -->
                <div class="row">
                    <input type="text" v-model="text2"/>
                </div>
                <div class="row">
                    Filter {{text2 | lettersCount}}
                </div>
                <div class="row">
                    Computed {{text2Computed}}
                </div>

                <!-- Exercise 3 -->
                <!-- Do the same as in Exercises 1 & 2, now with Computed Properties -->

                <!-- Exercise 4 -->
                <!-- Share the Computed Property rebuilding Exercise 2 via a Mixin -->
            </div>
        </div>
    </div>
</template>

<script>
    import {textMixin} from './components/mixins/mixins'
    export default {
        data () {
            return {
                text1: '',
                text2: ''
            }
        },
        filters: {
            reverseText: function (value) {
                if (!value) {
                    return;
                }
                value = value.toString();
                return [...value].reverse().join('');
            }
        },
        /* computed: {
             text1Computed: function () {
                 if (!this.text1) {
                     return;
                 }
                 return [...this.text1].reverse().join('');
             },
             text2Computed: function () {
                 if (!this.text2) {
                     return;
                 }
                 return `Test (${this.text2.length})`
             }
         },*/
        mixins: [textMixin]
    }
</script>

<style>
</style>