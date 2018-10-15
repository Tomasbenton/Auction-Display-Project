<template>
 <div id="home">
     <img src="../assets/logo.png">
  <h1>Home Page</h1>
  <router-link to="/admin"><button>Login</button></router-link>
  <router-link to="display"><button>Display</button></router-link>
 </div>
</template>

<script>
export default{

}
</script>

<style>
#home{
    margin-top: 100px;
}

a{
    text-decoration: none;
}
</style>
