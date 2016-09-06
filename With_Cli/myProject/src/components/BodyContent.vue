<template>
    <!-- product -->
    <div>
        <div class="head">All Product</div>
        <div class="row">
            <div class="col-xs-6 col-sm-3" v-for="item in productItems">
                <div class="card">
                    <img class="card-img" :src="item.imgUrl"></img>
                    <div class="card-content">
                        <p class="product product-name">{{ item.name }}</p>
                        <hr class="inside">
                        <p class="product product-price">{{ item.price }} THB</p>
                    </div>
                    <div class="card-content card-bottom" v-on:click="actionAddToCart(item)">Add to Cart</div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
  export default {
    data: function () {
      return {
        xx: 'hello'
      }
    },
    props: ['productItems', 'actionAddToCart'],
    methods: {
      addToCart: function (item) {
        this.$parent.$options.methods.addNewItem(item)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.card{
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    text-align: center;
    margin: 15px 0px;
    background-color: white;
}

.card-img{
    width: 100%;
    height: 330px;
}

.card-content{
    padding: 10px;
}

.card-bottom{
    color: white;
    background-color: #009933;
}

.card-bottom:hover{
    opacity: 0.8;
    cursor: pointer;
}

.product{
    font-weight: bold;
}

.product-name{
    text-align: left;
    font-size: 18px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.product-price{
    text-align: right;
    margin-bottom: 0px;
}
</style>
