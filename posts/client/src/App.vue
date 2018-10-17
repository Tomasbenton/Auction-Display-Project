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
    height: 100%;
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
    margin: auto;
    width: 80px;
    height: 30px;
    color: #ffffff;
    font-size: 14px;
    margin-top: 30px;
    margin-bottom: 15px;
}

 input{
    display: block;
    width: 100%;
    max-width: 300px;
    height: 40px;
    margin: 5px 0px 10px 0px;
    margin: auto;
    padding: 0px 5px;
    box-sizing: border-box;
    border: solid #808080 1px;
    color: #34495e;
 }

 a{
    color: #2980b9;
    color:#34495e;
    margin-right: 10px;
 }
</style>
