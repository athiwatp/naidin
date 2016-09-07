<template>
    <section class="container">
        <top-content :cart-items="cart"></top-content>
        <body-content :product-items="products" :action-add-to-cart="addNewItem"></body-content>
    </section>
</template>

<script>
import topContent from './components/TopContent'
import bodyContent from './components/BodyContent'

export default {
  replace: false,
  components: {
    topContent,
    bodyContent
  },
  props: ['cart', 'products'],
  methods: {
    addNewItem: function (item) {
      if (this.cart.length > 0) {
        for (var i = 0; i < this.cart.length; i++) {
          if (item.id === this.cart[i].id) {
            this.cart[i].amount += 1
            break
          } else if (i === this.cart.length - 1) {
            this.cart.push(item)
            break
          }
        }
      } else {
        this.cart.push(item)
      }
    }
  }
}
</script>