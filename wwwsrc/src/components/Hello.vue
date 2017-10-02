<template>
  <div class="hello">
    <h1>Welcome to Stickr</h1>

    <div class="heading">
      <p>Get Started</p>
      <button class="btn btn-default b" @click="showLogin">LOGIN</button>
      <button class="btn btn-default b" @click="showSignup">SIGN UP</button>


      <div id="stuff">

        <form v-show="seen" @submit.prevent="createUser()">
          <input class="formcss" type="text" v-model="credentials.email" placeholder="email">
          <input class="formcss" type="password" v-model="credentials.password" placeholder="password">
          <button class="btn btn-default c" type="submit">CREATE</button>
        </form>
        <form v-show="unameSeen" @submit.prevent="loginUser()">
          <input class="formcss" type="text" v-model="credentials.email" placeholder="email">
          <input class="formcss" type="password" v-model="credentials.password" placeholder="password">
          <button class="btn btn-default c" type="submit">LOGIN</button>
        </form>
      </div>
    </div>

    <div class="container">
      <div class="row">
        <div class="col-xs-12">
        </div>
      </div>
    </div>

    <hr>
  </div>
</template>

<script>
  import { store } from '../store'
  export default {
    name: 'hello',
    components: {
    },
    data() {
      return {
        credentials: {
          password: '',
          email: ''
        },
        name: '',
        description: '',
        see: true,
        seen: false,
        unameSeen: false
      }
    },
    mounted() {
    },
    methods: {
      showSignup() {
        if (this.unameSeen) {
          this.showLogin()
        }
        this.seen = !this.seen
      },
      showLogin() {
        if (this.seen) {
          this.showSignup()
        }
        this.unameSeen = !this.unameSeen
      },

      createUser() {
        console.log(this.credentials)
        this.$store.dispatch('register', JSON.parse(JSON.stringify(this.credentials)))
        this.credentials = {
          email: '',
          password: ''
        }
      },
      loginUser() {
        this.$store.dispatch('login', JSON.parse(JSON.stringify(this.credentials)))
        this.credentials = {
          email: '',
          password: ''
        }
      },
    },
    computed: {
      credentials() {
        return this.$store.state.credentials
      }
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1,
  h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>