<template>
    <div id="admin">
        <img src="../assets/logo.png">
        <form>
            <h1>Admin Login</h1>
            <input type="text" placeholder="email address/username">
            <input type="password" placeholder="password">
   <br>
            Forgot your login? Click <a href="#">here.</a>
            <router-link to="/admin"><button type="submit">Submit</button></router-link>
        </form>
    </div>

</template>

<script>
export default{
}
</script>

<style>
 #admin{
    width: 320px;
    margin: auto;
    text-align: center;
    border-radius: 10px;
    background-color: #CFD8DC;
    font-size: 14px;
    margin-top: 100px;
    font-family: monospace;
 }
 form{
    text-align: left;
    margin: auto;
    width: 100%;
    padding: 15px 25px;
    box-sizing: border-box;
 }
 input{
 margin-bottom: 7px;
 font-family: monospace;
 }
 button{
    font-family: monospace;
    height: 50px;
    width: 100%;
 }
</style>