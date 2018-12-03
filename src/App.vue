<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/picard3-mod02color.png">
    <HelloWorld msg="Tea. Early Grey. Hot."/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  @import url('https://fonts.googleapis.com/css?family=K2D');
  font-family: 'K2D', Helvetica, Arial, sans-serif;
  text-align: center;
  color: royalblue;
  margin-top: 60px;
}
</style>
