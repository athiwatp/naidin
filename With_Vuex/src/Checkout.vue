<template>
  <section class="container">
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
  data: function () {
    return {
      cart: this.getCart
    }
  },
  vuex: {
    getters: {
      getCart: getCart
    }
  }
}
</script>