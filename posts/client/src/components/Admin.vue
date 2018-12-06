<template>
 <div id="admin">
	<img class="logo" src="../assets/4H_Logo.png">
	<img class='logo' src='../assets/FFA_Logo.png'>
	<h1>Admin Dashboard</h1>
	<router-link v-bind:to="{ name: 'Manage', params: { view: true } }"><button>Manage Data</button></router-link>
	<router-link to="/display"><button>Current/Previous Sale Display</button></router-link>
	<router-link to="/exhibitor"><button>List of Exhibitors</button></router-link>
	<router-link to="/buyer"><button>Buyer/Addons Display</button></router-link>
  <router-link to="/transaction/exhibitor"><button>Exhibitor Transaction Table</button></router-link>
  <router-link to="/transaction/addon"><button>Addon Transaction Table</button></router-link>
	<router-link to="/admin" class-active="active" v-on:click.native="logout()" replace><button class="logout">Logout</button></router-link>
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

<style scoped>
  #admin{
    width: 100%;
    height: 100%;
    margin-top: 100px;
    text-align: center;
  }

  h1{
    color: #339966;
  }

  button{
    width: 100%;
    border: none;
    height: 60px;
    color: #339966;
    background-color: #f1f1f1;
    margin: 0;
    border-radius: 0;
  }

  button:hover{
    background-color: #339966;
    color: #f1f1f1;
  }

  .logout{
    background-color: #339966;
    color: #ffffff;
  }

  .logout:hover{
    background-color: #fadc23;
    color: #339966;
  }
</style>
