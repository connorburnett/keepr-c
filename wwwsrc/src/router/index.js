import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Navbar from '@/components/Navbar'
import Home from '@/components/Home'
import Keeps from '@/components/Keeps'
import Profile from '@/components/Profile'
import Vault from '@/components/Vault/'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/profile/:profileId',
      name: 'Profile',
      component: Profile
    },
    {
      path: 'vault/:vaultId',
      name: 'Vault',
      component: Vault
    }
  ]
})
