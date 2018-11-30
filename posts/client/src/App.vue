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
</style>
