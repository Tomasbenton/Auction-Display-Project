<template>
	<div id="buyers">
        <input type="text" placeholder="Search tag #">
        <button>Submit</button>
        <router-link v-bind:to="{ name: 'NewBuyer' }">
          <button class="add">Add</button>
        </router-link>
        <div>
        <table>
          <tr>
						<td><strong>Sale Number</strong></td>
						<td><strong>Name</strong></td>
						<td><strong>Identifier</strong></td>
						<td><strong>Contact Name</strong></td>
						<td><strong>Email</strong></td>
						<td><strong>Phone</strong></td>
						<td><strong>Address 1</strong></td>
						<td><strong>Address 2</strong></td>
						<td><strong>Location</strong></td>
						<td><strong>Type</strong></td>
						<td><strong>Purchase</strong></td>
						<td><strong>Picture</strong></td>
						<td><strong>Action</strong></td>
          </tr>
					<tr v-for="buyer in buyers" :key="buyer._id">
            <td>{{ buyer.entrySaleNumber }}</td>
            <td>{{ buyer.name }}</td>
            <td>{{ buyer.identifier }}</td>
						<td>{{ buyer.contactName }}</td>
						<td>{{ buyer.email }}</td>
						<td>{{ buyer.phone }}</td>
						<td>{{ buyer.address1 }}</td>
						<td>{{ buyer.address2 }}</td>
						<td>{{ buyer.cityStatePostalCode }}</td>
						<td>{{ buyer.type }}</td>
						<td>{{ buyer.purchaseAmount }}</td>
						<td>{{ buyer.pictureName }}</td>
						<td>Edit Delete</td>
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
        let uri = 'http://localhost:8081/buyer'
        this.axios.get(uri).then(response => {
          this.buyers = response.data
        })
      }
    }
  }
</script>

<style>
    #manage{
        margin-top: 100px;
        height: 100%;
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
      width: 7.7%;
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
</style>
