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