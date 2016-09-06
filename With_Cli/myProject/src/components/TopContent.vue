<template>
  <div class="top-content">
      <promotion-content></promotion-content>
      <cart-content :cart-items="cartItems"></cart-content>
  </div>
</template>


<script>
import promotionContent from './Promotion'
import cartContent from './Cart'

export default {
  components: {
    promotionContent,
    cartContent
  },
  props: ['cartItems']
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
    .top-content{
        display: flex;
    }
    .top-box{
        padding: 15px;
        background-color: white;
        border: 1px solid #bfbfbf;
    }
</style>
