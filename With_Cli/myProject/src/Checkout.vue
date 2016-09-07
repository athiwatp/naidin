<template>
  <section class="container">
    <div class="col-sm-12 top-box">
      <cart-content :cart-items="cart"></cart-content>
    </div>
  </section>
</template>

<script>
import cartContent from './components/Cart'

export default {
  components: {
    cartContent
  },
  props: ['cart', 'products']
}
</script>