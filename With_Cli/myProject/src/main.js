import Vue from 'vue'
import App from './App'
import Home from './Home'
import Checkout from './Checkout'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

var router = new VueRouter()

router.map({
  '/': {
    component: Home
  },
  '/checkout': {
    component: Checkout
  }
})

router.start(App, 'body')
/* eslint-disable no-new */
// new Vue({
//   el: 'body',
//   components: { App }
// })
