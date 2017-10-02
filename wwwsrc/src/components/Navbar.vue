<template>
    <div>
        <nav class="navbar navbar-default">
            <div class="container">
                <!-- Mobile Display NavBar -->
                <div class="navbar-header">
                    <!-- <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1"
                        aria-expanded="false">
                          <span class="sr-only">Toggle navigation</span>
                          <span class="icon-bar"></span>
                          <span class="icon-bar"></span>
                          <span class="icon-bar"></span>
                        </button> -->
                    <div>
                        <router-link class="navbar-brand" :to="{name: 'Home'}">Stickr</router-link>
                    </div>
                </div>

                <!-- Regular view -->
                <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <!-- Begin if statement to check if user is logged in -->
                    <div class="nav navbar-nav navbar-right align-everything">
                            <div class="menu" v-if="credentials.email != null">
                                <router-link :to="'/profile/'+ credentials._id">Profile</router-link>
                                <li role="separator" class="divider"></li>
                                <div @click="logout"><a href="#">Logout</a></div>
                            </div>
                    </div>
                    <!---->
                    <!-- End of User login -->

                </div>
                <!-- End Regular View-->
            </div>
            <!-- End container -->
        </nav>

    </div>
</template>

<script>
    export default {
        name: 'navbar',
        components: {
        },
        data() {
            return {
            }
        },
        methods: {
            logout() {
                this.$store.dispatch("logout")
            }
        },
        computed: {
            credentials() {
                return this.$store.state.credentials
            }
        }
    }

</script>

<style scoped>
    .login {
        margin-top: 8px;
    }

    nav {
        background-color: #252a33;
        border: none;
        border-radius: 0;
    }

    .navbar-default .navbar-nav>li>a {
        color: white;
    }

    .navbar-brand {
        font-family: 'Fjalla One', sans-serif;
        font-size: 23px;
    }

    .glyphicon-fire {
        font-size: 20px;
        width: 30px;
        color: #ec4858
    }

    .mail-number {
        padding-right: 10px;
    }

    .navbar-brand {
        font-family: 'Fjalla One', sans-serif;
        font-size: 23px;
    }
</style>