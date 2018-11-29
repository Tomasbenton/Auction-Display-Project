<template>
 <div id="admin">
	<img class="logo" src="../assets/4H_Logo.png">
	<img class='logo2' src='../assets/FFA_Logo.png'>
	<h1>Admin Dashboard</h1>
	<router-link to="/manage"><button class="button">Manage Data</button></router-link>
	<router-link to="/control"><button class="button">Display Control Panel</button></router-link>
	<router-link to="/display"><button class="button">Main Display Page</button></router-link>
	<router-link to="/exhibitor"><button class="button">Exhibitor Display</button></router-link>
	<router-link to="/buyer"><button class="button">Buyer Display</button></router-link>
	<router-link to="/admin" class-active="active" v-on:click.native="logout()" replace><button class="button">Logout</button></router-link>
  <router-view @authenticated="setAuthenticated" />
 </div>
</template>

<script>
export default {
  name: 'Admin',
  data() {
    return {}
  },
  methods: {
    setAuthenticated(status) {
      this.$parent.authenticated = status
    },
    logout() {
      var retVal = confirm("Are you sure you want to logout?")
      if (retVal) {
        this.setAuthenticated(false)
        this.$router.replace({ name: 'Login' })
      } else {
        this.setAuthenticated(true)
      }
    }
  }
}
</script>
