<template>
  <div id='app'>
        <div id='nav'>
        </div>
        <router-view @authenticated="setAuthenticated" />
  </div>
</template>

<script>
var authenticatedVar = false
export default {
  name: 'App',
  data() {
    return {
      authenticated: authenticatedVar,
      users: []
    }
  },

  created: function() {
      this.fetchUsers()
  },

  mounted() {
    if (!this.authenticated) {
      this.$router.replace({ name: 'Login' })
    }
  },

  methods: {
    setAuthenticated(status) {
      this.authenticated = status
    },
    fetchUsers() {
      let uri = 'http://localhost:8081/user'
        // let uri = 'http://192.168.21.105:8081/user'
        this.axios.get(uri).then(response => {
          this.users = response.data
        })
    },
    getUserByName(name) {
      // users is array of objects, this mapping searches for index of object with matching username
      var index = this.users.map(function(e) { return e.username.toLowerCase() }).indexOf(name.toLowerCase())
      return this.users[index]
    }
  }
}
</script>

<style>
* {
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
}

body,
#app {
  width: 100%;
  height: 100%;
  padding: 0px;
  margin: 0px;
  overflow-x: hidden;
}

#home,
#admin,
#exhibitor,
#buyer,
form {
  width: 100%;
  height: 100%;
}

#display #exhibitor,
#display #buyer {
  width: 50%;
}

#home,
#admin,
form {
  text-align: center;
}

.addons {
  max-width: 400px;
}

#buyer,
#exhibitor {
  float: left;
}

.exhibitor_info {
  padding-left: 50px;
}
.exhibitor_name {
  margin-bottom: -20px;
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

#home button {
  width: 150px;
  height: 50px;
  cursor: pointer;
}

#admin button {
  width: 100%;
  height: 75px;
  cursor: pointer;
  border-radius: 0px;
}

h1,
h2,
button,
a {
  color: #339966;
}
body {
  color: #4c4c4c;
}

h1,
h2 {
  font-family: Lato, Arial, sans-serif;
}
.text,
ul {
  font-family: "Open Sans", Arial, sans-serif;
}

.text {
  text-align: left;
}

h1 {
  font-size: 40px;
}
h2 {
  font-size: 25px;
}
.buyer {
  font-size: 50px;
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

.buyer {
  background-color: #339966;
  color: #ffffff;
  text-transform: uppercase;
  font-weight: 900;
  padding: 10px;
  margin-top: -20px;
  font-style: normal;
}

h2 {
  font-style: italic;
}

ul {
  list-style-type: none;
}
li {
  line-height: 140%;
}

.amount {
  float: right;
}

button {
  transition: 0.2s ease all;
}
button:hover {
  background-color: #ffffff;
}

.frame {
  width: 100%;
  height: 100%;
}
.image {
  background-size: cover;
  width: 100%;
  height: auto;
}

/*#home{
    width: 40%;
    max-width: 350px;
    height: auto;
}

.column {
    width: 50%;
    height: 100%;
    overflow: hidden;
    float: left;
}

.row{ display: block; margin-bottom: 25px; }

.frame{
    width: 100%;
    height: auto;
    overflow: hidden;
}

.image{
    width: 100%;
    height: auto;
}

form{ width: 100%; }

input{
    display: block;
    width: 100%;
    max-width: 350px;
    height: 40px;
    border: solid #808080 1px;
}

.button{
    height: 40px;
    width: 100%;
    max-width: 350px;
}

table{
    width: 80%;
    border-radius: 10px;
}

body, #app, #display{
  margin: 0;
  padding: 0;
}
.small_pad{ padding: 25px 10px; }
.big_pad{ padding: 0px 50px 25px 50px; }
h1, h2, h3{ display: inline; } 
input{ 
    margin: 10px 0px 10px 0px;
    padding: 0px 5px;
}
.button{  margin: 10px 0px; }
#home, #admin, #manage{ margin: auto; margin-top: 100px;}
table{
    margin: 10px auto;
    padding: 10px 10px;
}

.left{ text-align: left; }
.right{ text-align: right; }
.center{ text-align: center; }
.top{ vertical-align: top; }
.bottom{ vertical-align: bottom; }

body, #app{ background-color: #ffffff; }
.button{ background-color: #34495e; border: none; }
#home{ background-color: #CFD8DC; border-radius: 10px; }
table{ background-color: #e8e8e8; }

body{ color: #34495e; }
a{ color:#34495e; }
.button{ color: #ffffff; }

body{
    font-family: 'Open Sans', Helvetica, sans-serif; 
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

body{ font-size: 16px; }
h1{ font-size: 45px; line-height: 130%; }
h2{ font-size: 30px; line-height: 110%; }
h3{ font-size: 24px; line-height: 100%; }

ul { list-style: none; }



        td{
      width: 25%;
        }

    button, input{
        display: inline-block;
        height: 40px;
    }

    .col{
        display: inline-block;
        width: 20%;
        text-align: left;
    }

    .row{
    padding: 10px 5px;
    }

    .add{

    }
        a {
      color: #4d7ef7;
      text-decoration: none;
        }
    a.add_post_link {
      background: #4d7ef7;
      color: #fff;
      padding: 10px 80px;
      text-transform: uppercase;
      font-size: 12px;
      font-weight: bold;
        }
        */
</style>
