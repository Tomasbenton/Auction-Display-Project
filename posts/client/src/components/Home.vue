<template>
	<div id="home">
		<img class="logo" src="../assets/4H_Logo.png">
		<h1>Admin Login</h1>
		<form>
			<input type="text" placeholder="Email Address/Username">
			<input type="password" placeholder="password">
			<router-link to="/admin"><button type="submit">Submit</button></router-link>
			<p class="text">Forgot your login? Click <a href="#">here</a>.</p>
		</form>
	</div>
</template>

<script>
export default{
}
</script>

<style>
	#home, form{
		width: 100%;
		height: 100%;
		text-align: center;
	}
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

	button{
		width: 150px;
		height: 50px;
		float: right;
		cursor: pointer;
	}

	h1, button, a{ color: #339966; }

	h1{ font-family: Lato, Arial, sans-serif; }
	.text{ font-family: 'Open Sans', Arial, sans-serif; }

	.text{ text-align: left; }

	h1{ font-size: 40px; }
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
</style>
