<template>
 <div id="admin">
 	<img class="logo" src="../assets/4H_logo.png">
	<h1>Admin Dashboard</h1>
	<router-link to="/manage"><button class="button">Manage Data</button></router-link>
	<router-link to="/control"><button class="button">Display Control Panel</button></router-link>
	<router-link to="/display"><button class="button">Main Display Page</button></router-link>
	<router-link to="/exhibitor"><button class="button">Exhibitor Display</button></router-link>
	<router-link to="/buyer"><button class="button">Buyer Display</button></router-link>
	<button class="button">Logout</button>
 </div>
</template>

<script>
export default{
}
</script>
