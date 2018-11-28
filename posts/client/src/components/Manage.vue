<template>
	<div class="manage">
		<h1>Manage Data</h1>
		<button @click='view = !view'>Toggle View</button>
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

<style type="text/css">
	h1 {
	 border-bottom: solid;
	 padding-bottom: 20px;
	}
</style>
