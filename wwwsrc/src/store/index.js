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
  baseURL: 'http://localhost:5000/',
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
//     commit('login', res.data)
//   })
// }

// loginAndGetDataExample()
// getAuth()

var store = new vuex.Store({

  state: {
    credentials: {},
    viewUser: {},
    mainPage: {},
    vaults: [],
    keeps: {}
  },

  mutations: {

    createUser(state, data) {
      state.credentials = data
    },
    setUser(state, data) {
      state.credentials = data
    },
    logoutUser(state, data) {
      state.credentials = {}
    },

    setUserView(state, data) {
      state.viewUser = data
    },

    setUserView(state, data) {
      state.viewUser = data
    },
    setUserKeeps(state, data) {
      state.keeps = data
    },
    setKeepView(state, data) {
      state.keepView = data
    },

    setVaults(state, data) {
      state.vaults = data
    },
    setActiveVault(state, data) {
      state.activeVault = data
    },

  },

  actions: {
    // authentication

    authenticate({ commit, dispatch }) {
      auth('account').then(res => {
        console.log(res)
        if (!res.data.data) {
          return router.push('/home')
        }
        commit('setUser', res.data.data)
        router.push('/home')
      })
        .catch(err => {
          //commit('handleError', err)
          router.push('/')
        })
    },

    // user actions

    register({ commit, dispatch }, credentials) {
      auth.post("register", credentials).then(res => {
        if (res.data.message == "Successfully created user account") {
          commit('createUser', res.data.data)
          return router.push('/home')
        }
      })
      // .catch((err) => {
      //   commit('handleError', err);
      // })
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
      // .catch(err => {
      //   commit('handleError', err)
      // })
    },
    logout({ commit, dispatch }) {
      auth.delete("logout").then(res => {
        if (!res.data.data) {
          commit('logoutUser', {})
          return router.push('/')
        }
      })
    },

    // profile and keep actions

    getUser({ commit, dispatch }, userid) {
      //console.log("User id in store:", userid)
      api(`profile/${userid}`).then(res => {
        //console.log("get", res.data)
        commit('setUserView', res.data)
      })
    },
    getUserKeeps({ commit, dispatch }, userid) {
      api(`home/userid/${userid}`).then(res => {
        // console.log(res)
        commit('setUserKeeps', res.data)
      })
    },
    getKeeps({ commit, dispatch }, obj) {
      api(`/home/${obj.type}/${obj.query}`).then(res => {
        // console.log(res)
        commit('setUserKeeps', res.data)
      })
    },
    keepView({ commit, dispatch }, keepid) {
      api(`keeps/${keepid}`).then(res => {
        commit('setKeepView', res.data)
      })
    },

    // profile and vault actions

    getVaults({ commit, dispatch }) {
      api('vaults')
        .then(res => {
          commit('setVaults', res.data.data)
        })
      // .catch(err => {
      //   commit('handleError', err)
      // })
    },
    getVault({ commit, dispatch }, id) {
      api('vaults/' + id)
        .then(res => {
          commit('setActiveVault', res.data.data)
        })
      // .catch(err => {
      //   commit('handleError', err)
      // })
    },

    // create keeps

    createKeep({ commit, dispatch }, keep) {
      api.post("keeps", keep).then(res => {
        //console.log(res)
        dispatch('getUserKeeps', res.data.owner)

      })
        // .catch((err) => {
        //   commit('handleError', err);
        // })
    },

    // create vaults

    createVault({ commit, dispatch }, vault) {
      api.post("vaults", vault).then(res => {
        //console.log(res)
        dispatch('getVaults', res.data.owner)

      })
        // .catch((err) => {
        //   commit('handleError', err);
        // })
    }
  }



})

export default store