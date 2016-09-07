<template>
  <div>
  <head-content text="Naidin Book Store"></head-content>
  <router-view></router-view>
</div>
</template>

<script>
import store from './vuex/store'
import headContent from './components/HeadContent'

export default {
  store: store,
  replace: false,
  components: {
    headContent
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
    /*margin-bottom: 100px;*/
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
