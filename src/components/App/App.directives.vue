<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>{{welcomeMsg}}</h1>
            </div>
        </div>
        <button v-custom-on:click="btnClicked" class="btn btn-primary col-md-offset-4">Click Me!</button>
        <hr/>
        <div v-custom-on:mouseover="divPassed" style="width:100px; height: 100px; background-color: teal"></div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                welcomeMsg: 'Directive Excercise'
            }
        },
        methods: {
            btnClicked(){
                this.welcomeMsg = 'Button clicked!'
            },
            divPassed(){
                this.welcomeMsg = 'Mouse over div'
            }
        },
        directives: {
            'custom-on': {
                bind(el, binding, vnode){
                    const type = binding.arg;
                    const myFunction = binding.value;
                    el.addEventListener(type, myFunction);
                }
            }
        }
    }
</script>