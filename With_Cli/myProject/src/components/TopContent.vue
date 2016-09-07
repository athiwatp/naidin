<template>
  <div class="top-content">
      <div class="col-xs-12 col-sm-8 top-box">
        <promotion-content></promotion-content>
      </div>
      <div class="hidden-xs col-sm-4 top-box">
        <cart-content :cart-items="cartItems"></cart-content>
      </div>
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
