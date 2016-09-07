<!-- header section -->
<template>
    <header>
        <div class="container">
            <div class="col-sm-4"><h1 class="logo">{{ text }}</h1></div>
            <div class="col-sm-8">
                <div class="row">
                    <div :class="[$route.path === '/' ? 'menu-active' : '']" class="menu" v-link="{ 'path' : '/'}"><h2>Home</h2></div>
                    <div :class="[$route.path === '/checkout' ? 'menu-active' : '']" class="menu" v-link="{ 'path' : '/checkout'}"><h2>Checkout</h2></div>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
export default {
  props: ['text']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

header{
    height: 75px;
    background-color: white;
    -webkit-box-shadow: 0px 2px 5px 0px rgba(89,84,89,1);
    -moz-box-shadow: 0px 2px 5px 0px rgba(89,84,89,1);
    box-shadow: 0px 2px 5px 0px rgba(89,84,89,1);
    margin-bottom: 40px;
}

.logo{
    font-weight: bold;
}

.menu{
    vertical-align:middle;
    text-align:center;
    font-weight:bold;
    height: 100%;;
    float:left;
    padding: 0px 30px;
}

.menu-active{
    text-decoration:underline;
}

.menu:hover{
    cursor:pointer;
    text-decoration:underline;
}
</style>