<template>
  <section id="checkOut" class="container">
    <div class="col-sm-12 top-box">
      <cart-content :cart-items="cart"></cart-content>
    </div>
  </section>
</template>

<script>
import { getCart } from './vuex/getters'
import cartContent from './components/Cart'

export default {
  components: {
    cartContent
  },
  ready: function () {
    document.getElementById('checkOut').className += ' slideUp'
  },
  vuex: {
    getters: {
      cart: getCart
    }
  }
}
</script>