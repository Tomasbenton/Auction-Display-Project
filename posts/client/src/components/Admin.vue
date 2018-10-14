<template>
 <div id="admin">
  <form>
   <h1>Admin Login</h1>
   <input type="text" placeholder="email address/username">
   <input type="password" placeholder="password">
   Forgot your login? Click <a href="#">here.</a>
   <button type="submit">Submit</button>
  </form>
 </div>

</template>

<script>
export default{

}
</script>

<style>
 #admin{
  width: 300px;
  margin: auto;
  text-align: center;
  border-radius: 10px;
  background-color: #ffffff;
  font-size: 12px;
  margin-top: 100px;
 }

 form{
  text-align: left;
  margin: auto;
  width: 300px;
  padding: 15px 25px;
  box-sizing: border-box;
 }

 input{
  display: block;
  width: 100%;
  height: 30px;
  margin: 5px 0px 10px 0px;
  padding: 0px 5px;
  box-sizing: border-box;
  border: solid rgba(41, 128, 185, 0.5) 1px;
  color: #34495e;
 }

 a{
  color: #2980b9;
 }
</style>
