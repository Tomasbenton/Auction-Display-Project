<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      index: 0
    }
  }
}
</script>

<style>
  *{
      box-sizing: border-box;
      -moz-box-sizing: border-box;
      -webkit-box-sizing: border-box;
  }

  body{
      width: 100%;
      height: 100%;
      padding: 0px;
      margin: 0px;
  }
/*
  #home, #admin, #exhibitor, #buyer, form{
    width: 100%;
    height: 100%;
  }

  #display #exhibitor, #display #buyer{
    width: 50%;
  }

  #home, #admin, form{ text-align: center; }

  .addons{
    max-width: 400px;
  }

  #buyer, #exhibitor{
    float: left;
  }

  .exhibitor_info{ padding-left: 50px; }
  .exhibitor_name{ margin-bottom: -20px; }

  .logo{
    width: 150px;
    height: auto;
    margin-top: 50px;
  }

  form{
    max-width: 400px;
    margin: 0 auto;
  }

  input{
    width: 100%;
    max-width: 400px;
    height: 40px;
    display: block;
    margin-bottom: 20px;
  }

  #home button{
    width: 150px;
    height: 50px;
    cursor: pointer;
  }

  #admin button{
    width: 100%;
    height: 75px;
    cursor: pointer;
    border-radius: 0px;
  }

  h1, h2, button, a{ color: #339966; }
  body{ color: #4C4C4C; }

  h1, h2{ font-family: Lato, Arial, sans-serif; }
  .text, ul{ font-family: 'Open Sans', Arial, sans-serif; }

  .text{ text-align: left; }

  h1{ font-size: 40px; }
  h2{ font-size: 25px; }
  .buyer{ font-size: 50px; }
  .text{ font-size: 13px; }
  input{ font-size: 14px; }

  input{
    border: none;
    border-bottom: 1px solid #808080;
  }

  button{
    border: none;
    border-radius: 5px;
    background-color: #f1f1f1;
  }

  a, button{
    text-transform: uppercase;
    text-decoration: none;
    font-weight: 600;
    letter-spacing: 1px;
  }

  .buyer{
    background-color: #339966;
    color: #ffffff;
    text-transform: uppercase;
    font-weight: 900;
    padding: 10px;
    margin-top: -20px;
    font-style: normal;
  }

  h2{ font-style: italic; }

  ul{ list-style-type: none; }
  li{ line-height: 140%; }

  .amount{ float: right; }

  button{ transition: 0.2s ease all; }
  button:hover{ background-color:#ffffff; }

  .frame{ width: 100%; height: 100%; }
  .image{
    background-size: cover;
    width: 100%;
    height: auto;
  }*/
</style>
