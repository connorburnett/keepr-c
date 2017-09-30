<template>
  <div class="hello">
    <h1>Welcome to Keepr</h1>
    <p>Get Started</p>

    <div class="heading">
      <button class="btn btn-default b" @click="showLogin">LOGIN</button>
      <button class="btn btn-default b" @click="showSignup">SIGN UP</button>


      <div id="stuff">

        <form v-show="seen" @submit.prevent="createUser()">
          <input class="formcss" type="text" v-model="user.name" placeholder="username">
          <input class="formcss" type="password" v-model="user.password" placeholder="password">
          <input class="formcss" type="text" v-model="user.email" placeholder="email">
          <button class="btn btn-default c" type="submit">CREATE</button>
        </form>
        <form v-show="unameSeen" @submit.prevent="loginUser()">
          <input class="formcss" type="text" v-model="user.email" placeholder="email">
          <input class="formcss" type="password" v-model="user.password" placeholder="password">
          <button class="btn btn-default c" type="submit">LOGIN</button>
        </form>
      </div>
    </div>

    <hr>
  </div>
</template>

<script>
  export default {
    name: 'hello',
    data() {
      return {
        user: {
          name: '',
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
    computed: {
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
        console.log(this.user)
        this.$store.dispatch('createUser', this.user)
      },
      loginUser() {
        this.$store.dispatch('login', this.user)
      },
    },
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