<template>
	<div id='login'>
		<img class='logo' src='../assets/4H_Logo.png'>
    <img class='logo2' src='../assets/FFA_Logo.png'>
		<h1>Admin Login</h1>
		<form>
			<input type="text" name="username" v-model="input.username" placeholder="Username" @keyup.enter="login()">
			<input type="password" name="password" v-model="input.password" placeholder="Password" @keyup.enter="login()">
			<button type="button" name="login" v-on:click="login()">Login</button>
      <p class='errorMsg' id="hidden"></p>
			<!-- <p class="text">Forgot your login? Click <a href="#">here</a>.</p> -->
		</form>
	</div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      input: {
        username: "",
        password: ""
      }
    };
  },
  methods: {
    login() {
      if (this.input.username != "" && this.input.password != "") {
        if (
          this.input.username == this.$parent.mockAccount.username &&
          this.input.password == this.$parent.mockAccount.password
        ) {
          this.$emit("authenticated", true);
          this.$router.replace({ name: "Admin" });
        } else {
          console.log("Username or password is incorrect");
          document.getElementById("hidden").innerHTML = "Username or password is incorrect"
        }
      } else {
        console.log("Username and password are required");
        document.getElementById("hidden").innerHTML = "Username and password are required"
      }
    }
  }
}
</script>

<style>
#login,
form {
  width: 100%;
  height: 100%;
  text-align: center;
}
.logo {
  width: 150px;
  height: auto;
  margin-top: 50px;
}
.logo2 {
  width: auto;
  height: 170px;
  margin-top: 50px;
}

form {
  max-width: 400px;
  margin: 0 auto;
}

input {
  width: 100%;
  max-width: 400px;
  height: 40px;
  display: block;
  margin-bottom: 20px;
}

input:focus, button:focus {
  border-color: #339966;
  outline: 0;
  -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(102, 233, 109, 0.6);
  box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(102, 233, 109, 0.6);
}  

button {
  width: 150px;
  height: 50px;
  float: right;
  cursor: pointer;
}

h1,
button,
a {
  color: #339966;
}

h1 {
  font-family: Lato, Arial, sans-serif;
}
.text {
  font-family: "Open Sans", Arial, sans-serif;
}

.text {
  text-align: left;
}

h1 {
  font-size: 40px;
}
.text {
  font-size: 13px;
}
input {
  font-size: 14px;
}

input {
  border: none;
  border-bottom: 1px solid #808080;
}

button {
  border: none;
  border-radius: 5px;
  background-color: #f1f1f1;
}

a,
button {
  text-transform: uppercase;
  text-decoration: none;
  font-weight: 600;
  letter-spacing: 1px;
}

.errorMsg {
  color: red;
  text-align: left;
}
</style>
