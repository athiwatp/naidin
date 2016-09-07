import Vue from 'vue'
import Vuex from 'vuex'

// Make vue aware of Vuex
Vue.use(Vuex)

// Create an object to hold the initial state when
// the app starts up
const state = {
  // TODO: Set up our initial state
  cart: [],
  products: []
}

// Create an object storing various mutations. We will write the mutation
const mutations = {
  // TODO: set up our mutations
  INITIAL (state, model) {
    state.products = model.products
  },
  ADD_TO_CART (state, item) {
    if (state.cart.length > 0) {
      for (var i = 0; i < state.cart.length; i++) {
        if (item.id === state.cart[i].id) {
          state.cart[i].amount += 1
          break
        } else if (i === state.cart.length - 1) {
          state.cart.push(item)
          break
        }
      }
    } else {
      state.cart.push(item)
    }
  }
}

// Combine the initial state and the mutations to create a Vuex store.
// This store can be linked to our app.
export default new Vuex.Store({
  state,
  mutations
})
