<template>
	<div id='login'>
		<img class='logo' src='../assets/4H_Logo.png'>
    <img class='logo' src='../assets/FFA_Logo.png'>
		<h1>Admin Login</h1>
		<form>
			<input type="text" name="username" v-model="input.username" placeholder="Username" @keyup.enter="login()">
			<input type="password" name="password" v-model="input.password" placeholder="Password" @keyup.enter="login()">
      <p class='errorMsg' id="hidden"></p>
			<button type="button" name="login" v-on:click="login()">Login</button>
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
    }
  },

  beforeCreate() {
    this.$parent.authenticated = false
  },

  methods: {
    login() {
      if (this.input.username != "" && this.input.password != "") {
        var user = this.$parent.getUserByName(this.input.username)
        if (typeof user !== "undefined" && this.input.username.toLowerCase() == user.username.toLowerCase() && this.input.password == user.password) {
          this.$emit("authenticated", true)
          this.$parent.authenticated = true
          this.$router.replace({ name: "Admin" })
        } else {
          console.log("Username or password is incorrect")
          document.getElementById("hidden").innerHTML = "Username or password is incorrect"
        }
      } else {
        console.log("Username and password are required")
        document.getElementById("hidden").innerHTML = "Username and password are required"
      }
    }
  }
}
</script>

<style scoped>
  #login{
    width: 100%;
    max-width: 400px;
    margin: auto;
    margin-top: 100px;
    text-align: center;
    font-family: 'Open Sans', Arial, sans-serif;
  }

  button{
    display: block;
    margin-left: auto;
    padding: 10px 15px;
    width: 100px;
  }

  .errorMsg{
    color: #ff0000;
    font-size: 14px;
    float: left;
  }

  input{
    height: 50px;
  }
</style>
