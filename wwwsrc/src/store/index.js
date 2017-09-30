import axios from 'axios'
import vue from 'vue'
import vuex from 'vuex'
import router from '../router'

let api = axios.create({
  baseURL: 'http://localhost:5000/api/',
  timeout: 10000,
  withCredentials: true
})

let auth = axios.create({
  baseURL: '//kanbanvue.herokuapp.com/',
  timeout: 2000,
  withCredentials: true
})
vue.use(vuex)

// function CreateAccountExample() {
//   api.post('account', { email: "j@j.com", password: 'Testing123!' }).then(GetDataExample)
// }

// function loginAndGetDataExample() {
//   api.post('account/login', { email: "j@j.com", password: 'Testing123!' }).then(GetDataExample)
// }

// function logout() {
//   api.delete('account/logout')
// }

// function GetDataExample() {
//   api('values').then(d => {
//     console.log("Values Controller Data:", d)
//   }).catch(err => {
//     console.error(err)
//   })
// }

// function getAuth() {
//   api('account').then(res => {
//     console.log("Auth Response", res)
//   })
// }

// loginAndGetDataExample()
// getAuth()

var store = new vuex.Store({

  state: {
    credentials: {},
    viewUser: {},
    mainPage: {},
    vaults: {},
    keeps: {}
  },

  mutations: {
    setUser(state, data) {
      state.credentials = data
    },

    setUserView(state, data) {
      state.viewUser = data
    },
  },

  actions: {
    // authentication

    authenticate({ commit, dispatch }) {
      auth('authenticate').then(res => {
        console.log(res)
        if (!res.data.data) {
          return router.push('/hello')
        }
        commit('setUser', res.data.data)
        router.push('/home')
      })
        .catch(err => {
          //commit('handleError', err)
          router.push('/hello')
        })
    },

    // user actions

    register({ commit, dispatch }, credentials) {
      auth.post("register", credentials).then(res => {
        if (res.data.message == "Successfully created user account") {
          commit('setUser', res.data.data)
          return router.push('/home')
        }
      })
        .catch((err) => {
          commit('handleError', err);
        })
    },
    login({ commit, dispatch }, credentials) {
      auth.post("login", credentials).then(res => {
        if (res.data.data) {
          commit('setUser', res.data.data)
          return router.push('/home')

        } else {
          res.data.data = {};
        }
        //console.log('user object', res.data.data);

      })
        .catch(err => {
          commit('handleError', err)
        })
    },
    logout({ commit, dispatch }) {
      auth.delete("logout").then(res => {
        if (!res.data.data) {
          commit('setUser', {})
          return router.push('/')
        }
      })
    }
  }



})

export default store