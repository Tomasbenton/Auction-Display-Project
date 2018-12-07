<template>
  <div id='app'>
    <div id='nav'>
    </div>
    <router-view @authenticated="setAuthenticated" />
  </div>
</template>

<script>
var authenticatedVar = true
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
      // let uri = 'http://localhost:8081/user'
        let uri = `http://${process.env.HOST_NAME}:8081/user`
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
  #app, body, #exhibitorTransaction {
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    font-family: 'Open Sans', Arial, sans-serif;
    font-size: 16px;
  }

  .logo{
    width: 150px;
  }

  h1{
    font-family: Lato, Arial, sans-serif;
    text-transform: uppercase;
    font-size: 24px;
    line-height: 100%;
    color: #339966;
  }

  a{
    text-decoration: none;
  }

  input{
    width: 100%;
    height: 40px;
    padding: 10px 15px;
    margin-bottom: 15px;
  }

  input{
    border: none;
    border-bottom: 1px solid #808080;
    color: #404040;
  }

  button{
    background-color: #339966;
    border: none;
    border-radius: 5px;
    color: #ffffff;
    border-radius: 5px;
    font-size: 15px;
    cursor: pointer;
  }

  button:hover{
    background-color: #f1f1f1;
    color: #339966;
  }

  .link{
    color: #339966;
    text-transform: uppercase;
    cursor: pointer;
  }

  .dashboardBtn{
    background-color: #fadc23;
    color: #339966;
  }
</style>
