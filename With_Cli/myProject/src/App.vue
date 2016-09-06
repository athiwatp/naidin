<template>
  <head-content text="Naidin Book Store"></head-content>
  <!--<hello text="Aloha"></hello>-->

  <section class="container">
      <top-content :cart-items="cart"></top-content>
      <body-content :product-items="products" :action-add-to-cart="addNewItem"></body-content>
  </section>

</template>

<script>
import headContent from './components/HeadContent'
import topContent from './components/TopContent'
import bodyContent from './components/BodyContent'

var model = {
  cart: [],
  products: [
    { id: 'HR0001',
      name: 'Harry Potter and the Philosopher\'s Stone',
      price: 100.00,
      amount: 1,
      imgUrl: 'static/imgs/1.jpg'
    },
    { id: 'HR0002',
      name: 'Harry Potter and the Chamber of Secrets',
      price: 100.00,
      amount: 1,
      imgUrl: 'static/imgs/2.jpg'
    },
    { id: 'HR0003',
      name: 'Harry Potter and the Prisoner of Azkaban',
      price: 100.00,
      amount: 1,
      imgUrl: 'static/imgs/3.jpg'
    },
    { id: 'HR0004',
      name: 'Harry Potter and the Goblet of Fire',
      price: 100.00,
      amount: 1,
      imgUrl: 'static/imgs/4.jpg'
    },
    { id: 'HR0005',
      name: 'Harry Potter and the Order of the Phoenix',
      price: 100.00,
      amount: 1,
      imgUrl: 'static/imgs/5.jpg'
    },
    { id: 'HR0006',
      name: 'Harry Potter and the Half-Blood Prince',
      price: 100.00,
      amount: 1,
      imgUrl: 'static/imgs/6.jpg'
    },
    { id: 'HR0007',
      name: 'Harry Potter and the Deathly Hallows',
      price: 100.00,
      amount: 1,
      imgUrl: 'static/imgs/7.jpg'
    }]
}

export default {
  components: {
    headContent,
    topContent,
    bodyContent
  },
  data: function () {
    return model
  },
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

<style>
@font-face{
	font-family: 'exFont';
	src:url('./assets/fonts/CSChatThai.ttf');
}

body{
    background-color: #E9EAED;
    height: auto;
    font-family: "exFont","Lato",Calibri,Arial,sans-serif;
    color: #263238;
    font-size: 20px;
}

.container{
    margin-bottom: 100px;
}

hr.inside {
    padding: 0;
    border: none;
    border-top: medium double #333;
    color: #333;
    text-align: center;
}

hr.inside:after {
    content: "§";
    display: inline-block;
    position: relative;
    top: -0.7em;
    font-size: 1.5em;
    padding: 0 0.25em;
    background: white;
}

.head {
    margin: 35px 0px 10px;
    font-size: 30px;
    font-weight: bold;
    border-bottom: 3px solid #263238;
    width: 100%;
}

.head-inside{
    margin-top: 0px;
}

</style>
