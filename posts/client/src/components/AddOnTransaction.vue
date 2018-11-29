<template>
  <div id="AddonTransaction">
    <h1>Addon Transaction Table</h1>
    <form>
      Exhibitor Number: <input type="number">
      <button>Enter</button>
    </form>
    <form>
      Buyer Number: <input type="number">
      Amount: <input type="number">
      <button>Submit</button>
    </form>
  </div>
</template>

<script>
  export default{
    name: 'AddonTransaction'
  }
</script>

<style scoped>
  #AddonTransaction{
    width: 100%;
    height: 100%;
    margin-top: 100px;
    text-align: center;
  }

  form{
    text-align: left;
    font-family: Lato, Arial, sans-serif;
    color: #339966;
  }

  button{
    display: block;
    margin-left: auto;
    border-radius: 0;
    padding: 5px 10px;
    width: 100px;
    height: 40px;
  }

  input{
    padding: 0px 10px;
    color: #;
  }
</style>
