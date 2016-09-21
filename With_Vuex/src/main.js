import Vue from 'vue'
import App from './App'
import Home from './Home'
import Checkout from './Checkout'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import { sync } from 'vuex-router-sync'
import store from './vuex/store'

Vue.use(VueRouter)
Vue.use(VueResource)

var router = new VueRouter()

router.map({
  '/': {
    component: Home
  },
  '/checkout': {
    component: Checkout
  }
})

router.redirect({
  // redirect any not-found route to home
  '*': '/'
})

router.start(App, 'body')

sync(store, router)
