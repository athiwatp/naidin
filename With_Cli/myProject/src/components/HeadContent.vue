<!-- header section -->
<template>
    <header>
        <div class="container">
            <h1 class="logo">{{ text }}</h1>
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
    margin-bottom: 50px;
}

.logo{
    font-weight: bold;
}
</style>