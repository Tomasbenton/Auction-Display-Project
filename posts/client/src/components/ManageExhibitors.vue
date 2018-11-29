Exhibitor<template>
	<div id="exhibitors">
		<div id="control">
			<h2>Exhibitors</h2>
        	<input type="text" placeholder="Search tag #">
        	<button>Submit</button>
        	<router-link v-bind:to="{ name: 'NewExhibitor' }">
          	<button class="add">Add</button>
        	</router-link>
					<button @click=deleteAll()>Delete All Exhibitors</button>
		</div>
    <div>
    	<table>
      	<tr>
					<td><strong>Sale #</strong></td>
					<td><strong>Full Name</strong></td>
					<td><strong>Tag</strong></td>
					<td><strong>Species</strong></td>
					<td><strong>Animal Description</strong></td>
					<td><strong>Check-in Weight</strong></td>
					<td><strong>Club Name</strong></td>
					<td><strong>Show Class Name</strong></td>
					<td><strong>Placing</strong></td>
					<td><strong>Buyback</strong></td>
      	</tr>
      	<tr v-for="exhibitor in exhibitors" :key="exhibitor._id">
        	<td>{{ exhibitor.saleNumber }}</td>
					<td>{{ exhibitor.fullName }}</td>
					<td>{{ exhibitor.tag }}</td>
					<td>{{ exhibitor.species }}</td>
					<td>{{ exhibitor.animalDescription }}</td>
					<td>{{ exhibitor.checkInWeight }}</td>
					<td>{{ exhibitor.clubName }}</td>
					<td>{{ exhibitor.showClassName }}</td>
					<td>{{ exhibitor.placing }}</td>
					<td>{{ exhibitor.buyback }}</td>
					<router-link v-bind:to="{ name: 'EditExhibitor', params: { id: exhibitor._id } }">Edit</router-link> |
        	<a href="#" @click="deleteExhibitor(exhibitor._id)">Delete</a>
      	</tr>
			</table>
  	</div>
	</div>
</template>

<script>
  export default {
    name: 'Exhibitor',
    data() {
      return {
        exhibitors: [],
        index: 0
      }
    },

    created: function() {
      this.fetchExhibitors()
    },

    methods: {
      fetchExhibitors() {
        let uri = 'http://localhost:8081/exhibitor'
        this.axios.get(uri).then(response => {
          this.exhibitors = response.data
        })
      },
			async deleteExhibitor (id) {
				let uri = 'http://localhost:8081/exhibitor/' + id
	      await this.axios.delete(uri).then((response) => {
	        console.log(response)
	      })
	      this.fetchExhibitors()
	      this.$router.push({ name: 'Manage' })
    	},
			deleteAll() {
				let uri = 'http://localhost:8081/exhibitor/'
				var delCheck = confirm("Are you sure you want to delete ALL Exhibitors?")
				if (delCheck) {
	        for (var i = 0; i < this.exhibitors.length; i++) {
						uri = 'http://localhost:8081/exhibitor/' + this.exhibitors[i]._id
						this.axios.delete(uri).then((response) => {
							console.log(response)
						})
					}
					this.fetchExhibitors()
		      this.$router.push({ name: 'Manage' })
	      }
			}
    }
  }
</script>

<style>
		#control {
				margin: 20px;
				text-align: center;
		}
		h2 {
				text-align: center;
		}
		table{
				width: 95%;
				background-color: #e8e8e8;
				margin: auto;
				margin: 10px auto;
				padding: 10px 10px;
				border-radius: 10px;
		}

		td{
      width: 12.5%;
		}

    button, input{
        display: inline-block;
        height: 40px;
    }

    input{
        width: 200px;
    }
    .col{
        display: inline-block;
        width: 11.11%;
        text-align: left;
    }

    .row{
    padding: 10px 5px;
    }

    a.add_post_link {
      padding: 10px 80px;
      text-transform: uppercase;
      font-size: 12px;
      font-weight: bold;
		}
</style>
