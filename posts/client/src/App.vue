<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app{
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

body{
    /* background-color:  rgba(41, 128, 185, 0.5); */
    background-color: #ffffff;
    color: #34495e;
    margin: 0;
    overflow: hidden;
}

button{
    background-color: #339966;
    border: none;
    display: block;
    margin: auto;
    width: 80px;
    height: 30px;
    color: #ffffff;
    font-size: 14px;
    margin-top: 30px;
    margin-bottom: 15px;
}
</style>
