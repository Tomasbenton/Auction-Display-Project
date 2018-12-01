<template>
  <div id="ExhibitorTransaction">
    <h1>Exhibitor Transaction Table</h1>
    <form>
      Exhibitor Number: <input type="number">
      <button>Enter</button>
    </form>
    <form>
      Bidder Number: <input type="number">
      Amount: <input type="number">
      <button>Submit</button>
    </form>
  </div>
</template>

<script>
  export default{
    name: 'ExhibitorTransaction'
  }
</script>

<style scoped>
  #ExhibitorTransaction{
    width: 450px;
    height: 100%;
    margin: 0 auto;
    margin-top: 100px;
    text-align: center;
  }

  h1{
    text-align: left;
  }

  form{
    text-align: left;
    font-family: Lato, Arial, sans-serif;
    color: #339966;
  }

  input{
    width: 100%;
    height: 40px;
    margin-top: 10px;
  }

  button{
    display: block;
    margin-left: auto;
    padding: 5px 10px;
    width: 100px;
    height: 40px;
  }
</style>
