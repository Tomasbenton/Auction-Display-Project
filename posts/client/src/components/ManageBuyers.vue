<template>
	<div id="buyers">
		<div id="control">
				<h2>Buyers</h2>
        <input type="text" placeholder="Search tag #">
        <button>Submit</button>
        <router-link v-bind:to="{ name: 'NewBuyer' }">
          <button class="add">Add</button>
        </router-link>
				<button @click=deleteAll()>Delete All Buyers</button>
		</div>
        <div>
        <table>
          <tr>
						<td><strong>Bidder Number</strong></td>
						<td><strong>Name</strong></td>
						<td><strong>Contact Name</strong></td>
						<td><strong>Phone</strong></td>
						<td><strong>Email</strong></td>
						<td><strong>Logo Filename</strong></td>
          </tr>
					<tr v-for="buyer in buyers" :key="buyer._id">
            <td>{{ buyer.bidderNumber }}</td>
						<td>{{ buyer.name }}</td>
						<td>{{ buyer.contactName }}</td>
						<td>{{ buyer.phone }}</td>
						<td>{{ buyer.email }}</td>
						<td>{{ buyer.logoFilename }}</td>
						<router-link v-bind:to="{ name: 'EditBuyer', params: { id: buyer._id } }">Edit</router-link> |
            <a href="#" @click="deleteBuyer(buyer._id)">Delete</a>
          </tr>
				</table>

        </div>
	</div>

</template>

<script>
  export default {
    name: 'Buyer',
    data() {
      return {
        buyers: [],
				index: 0
      }
    },

    created: function() {
      this.fetchBuyers()
    },

    methods: {
      fetchBuyers() {
        // let uri = 'http://localhost:8081/buyer'
        let uri = `http://${process.env.HOST_NAME}:8081/buyer`
        this.axios.get(uri).then(response => {
          this.buyers = response.data
        })
      },
			async deleteBuyer (id) {
        // let uri = 'http://localhost:8081/buyer/' + id
        let uri = `http://${process.env.HOST_NAME}:8081/buyer/` + id
	      await this.axios.delete(uri).then((response) => {
	        console.log(response)
	      })
	      this.fetchBuyers()
	      this.$router.push({ name: 'Manage' })
    },
		async deleteAll() {
      // let uri = 'http://localhost:8081/buyer/'
      let uri = `http://${process.env.HOST_NAME}:8081/buyer/`
			var delCheck = confirm("Are you sure you want to delete ALL BUYERS?")
			if (delCheck) {
        for (var i = 0; i < this.buyers.length; i++) {
          // uri = 'http://localhost:8081/buyer/' + this.buyers[i]._id
          uri = `http://${process.env.HOST_NAME}:8081/buyer/` + this.buyers[i]._id
					this.axios.delete(uri).then((response) => {
						console.log(response)
					})
				}
				this.fetchBuyers()
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

		table{
				width: 95%;
				background-color: #e8e8e8;
				margin: auto;
				margin: 10px auto;
				padding: 10px 10px;
				border-radius: 10px;
		}

		td{
      width: 9.09%;
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
