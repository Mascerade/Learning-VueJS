<template>
    <div class="container">
        <form v-if="!isSubmitted">
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <!-- Exercise 1 -->
                    <!-- Create a Signup Form where you retrieve the following Information -->
                    <!-- Full Name (First Name + Last Name) -->
                    <!-- Mail -->
                    <!-- Password -->
                    <!-- Store Data? Yes/No -->

                    <h1>File a Complaint</h1>
                    <hr>
                    <div class="form-group">
                        <label for="first-name">First Name</label>
                        <input
                                type="text"
                                id="first-name"
                                class="form-control"
                                v-model="firstName">
                    </div>

                    <div class="form-group">
                        <label for="last-name">Last Name</label>
                        <input
                                type="text"
                                id="last-name"
                                class="form-control"
                                v-model="lastName">
                    </div>

                    <div class="form-group">
                        <label for="email">Email</label>
                        <input
                                type="text"
                                id="email"
                                class="form-control"
                                v-model="email">
                    </div>

                    <div class="form-group">
                        <label for="password">Password</label>
                        <input
                                type="text"
                                id="password"
                                class="form-control"
                                v-model="password">
                    </div>

                    <div class="form-group">
                        <h4>Store Data?</h4>
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

                    <button @click.prevent="submitted" class="btn btn-primary">Submit!
                    </button>

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
        <div v-if="isSubmitted" class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4>Your Data</h4>
                    </div>
                    <div class="panel-body">
                        <p>Full Name: {{ firstName }} {{ lastName}}</p>
                        <p>Mail: {{ email }}</p>
                        <p>Password: {{ password }}</p>
                        <p>Store in Database?: {{ storeData }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data: function() {
            return {
                firstName: '',
                lastName: '',
                email: '',
                password: '',
                storeData: 'Yes',
                isSubmitted: false

            }
        },
        methods: {
            submitted() {
                this.isSubmitted = true;
            }
        }
    }
</script>

<style>
</style>
