<template>
	<div id="admin">
        <img src="../assets/logo.png">
		<form>
			<h1>Admin Login</h1>
			<input type="text" placeholder="email address/username">
			<input type="password" placeholder="password">
   <br>
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
    background-color: #CFD8DC;
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
 margin-bottom: 7px;
 }
</style>
