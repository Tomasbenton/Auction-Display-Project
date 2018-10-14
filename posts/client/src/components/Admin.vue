<template>
	<div id="admin">
        <img src="../assets/logo.png">
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

	h1{
		display: block;
		padding: 15px 10px;
		text-align: center;
		color: #2980b9;
		font-size: 30px;
		font-weight: 400;
	}

	button{
		background-color: rgba(41, 128, 185);
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