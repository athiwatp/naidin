<template>
    <!-- cart -->
    <div class="col-sm-4 hidden-xs top-box">
        <div class="head head-inside"><span class="glyphicon glyphicon-shopping-cart"></span> Your Cart</div>
        <div class="row cart-list">
            <div v-for="item in cartItems">
                <span class="col-sm-7 cart-item-name">{{ item.name }}</span>
                <span class="col-sm-5 cart-item-price">x{{ item.amount }} - {{ item.price }} THB</span>
            </div>
        </div>
        <div class="row summary">
            <div class="col-sm-12"><hr class="inside"></div>
            <span class="col-sm-7 cart-item-name">Summary</span>
            <span class="col-sm-5 cart-item-price">{{ cartSummary }} THB</span>
        </div>
    </div>
</template>


<script>
  export default {
    props: ['cartItems'],
    computed: {
      cartSummary: function () {
        if (this.cartItems.length > 0) {
          return this.calculateSummary(this.cartItems)
        } else {
          return '0.00'
        }
      }
    },
    methods: {
      calculateSummary: function (refCart) {
        var cartList = JSON.parse(JSON.stringify(refCart))
        var orderCount = cartList.length
        if (orderCount > 0) {
          cartList = this.cutAllItem(cartList)
          return this.calculateSummary(cartList) + (orderCount === 1 ? 100 : 100 * orderCount * (1 - ((orderCount - 1) / 10)))
        } else {
          return 0
        }
      },
      cutAllItem: function (refCart) {
        var cartList = JSON.parse(JSON.stringify(refCart))
        for (var i = 0; i < cartList.length; i++) {
          if (cartList[i].amount > 1) {
            cartList[i].amount -= 1
          } else {
            cartList.splice(i, 1)
            i--
          }
        }
        return cartList
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.cart-list{
    overflow-y: scroll;
    height: 150px;
}

.cart-item-name{
    text-align: left;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.cart-item-price{
    text-align: right;
}

.summary{
    position: absolute;
    bottom: 15px;
    left: 15px;
    right: 15px;
}
</style>
