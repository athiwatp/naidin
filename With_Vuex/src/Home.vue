<template>
    <section class="container">
        <top-content :cart-items="cart"></top-content>
        <body-content :product-items="products" :action-add-to-cart="addProducts"></body-content>
    </section>
</template>

<script>
import * as actions from './vuex/actions'
import { getAll } from './vuex/getters'
import topContent from './components/TopContent'
import bodyContent from './components/BodyContent'

export default {
  components: {
    topContent,
    bodyContent
  },
  ready: function () {
    this.init()
  },
  data: function () {
    return this.getAll
  },
  vuex: {
    actions: {
      init: actions.initApp,
      addToCart: actions.addToCart
    },
    getters: {
      getAll: getAll
    }
  },
  methods: {
    addProducts: function (item) {
      this.addToCart(item)
    }
  }
}
</script>