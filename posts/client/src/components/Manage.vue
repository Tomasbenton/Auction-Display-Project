<template>
	<div class="manage">
		<h1>Manage Data</h1>
		<div id="toggle"><button @click='view = !view'>Toggle View</button></div>
		<router-link v-bind:to="{ name: 'Admin' }">
      <button id="dashboard-button">Return to Dashboard</button>
    </router-link>
		<template v-if="view">
			<manageExhibitors></manageExhibitors>
		</template>
		<template v-else>
			<manageBuyers></manageBuyers>
		</template>
	</div>
</template>




<script>
	import ManageExhibitors from './ManageExhibitors.vue'
	import ManageBuyers from './ManageBuyers.vue'

  export default {
		name: 'btn',
		data() {
			return {
				view: true
			}
		},
		methods: {
			toggleDisplayType() {
				this.view = !this.view
			}
		},
    components: {
      'manageExhibitors': ManageExhibitors,
			'manageBuyers': ManageBuyers
    }
  }

</script>

<style scoped type="text/css">
	h1 {
		text-align: center;
		border-bottom: solid;
		padding-bottom: 20px;
	}
	#toggle {
		margin: 30px;
	}
</style>
