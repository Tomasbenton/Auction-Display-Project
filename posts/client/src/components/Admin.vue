<template>
 <div id="home">
     <img src="../assets/logo.png">
  <h1>Welcome Admin</h1>
  <router-link to="/display"><button>Configure Display Layout</button></router-link>
  <router-link to="/display"><button>Display Monitor</button></router-link><br>
  <router-link to="/manage"><button>Manage Data</button></router-link>
  <button id="logout">Logout</button>
 </div>
</template>

<script>
export default{
}
</script>

<style>
#home{
    margin-top: 100px;
    font-family: monospace;
}
button{
    font-size: 14px;
    padding: 0px 10px;
    width: 250px;
    height: 70px;
    font-family: monospace;
}
#logout{
    background-color:#35495e;
}
</style>