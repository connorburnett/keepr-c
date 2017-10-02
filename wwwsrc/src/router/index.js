import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Navbar from '@/components/Navbar'
import Home from '@/components/Home'
import Keeps from '@/components/Keeps'
import Profile from '@/components/Profile'
import Vault from '@/components/Vault/'
import ModalKeepCreate from '@/components/ModalKeepCreate'
import ModalVaultCreate from '@/components/ModalVaultCreate'
import ModalAddKeep from '@/components/ModalAddKeep'

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
      path: '/profile/:userId',
      name: 'Profile',
      component: Profile,
      children: [{
        path: 'createkeep',
        name: 'modal',
        component: ModalKeepCreate
      }],
      children2: [{
        path: 'createvault',
        name: 'modal',
        component: ModalVaultCreate
      }]
    },
    {
      path: 'vault/:vaultId',
      name: 'Vault',
      component: Vault
    }
  ]
})
