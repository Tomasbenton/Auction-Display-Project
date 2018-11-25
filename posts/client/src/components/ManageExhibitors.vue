<template>
	<div id="exhibitors">
        <input type="text" placeholder="Search tag #">
        <button>Submit</button>
        <router-link v-bind:to="{ name: 'NewExhibitor' }">
          <button class="add">Add</button>
        </router-link>
        <div>
        <table>
          <tr>
						<td><strong>Sale Number</strong></td>
						<td><strong>Tag Number</strong></td>
						<td><strong>Species</strong></td>
						<td><strong>Weight</strong></td>
						<td><strong>First Name</strong></td>
						<td><strong>Last Name</strong></td>
						<td><strong>Company</strong></td>
						<td><strong>Picture</strong></td>
						<td><strong>Action</strong></td>
          </tr>
          <tr v-for="exhibitor in exhibitors" :key="exhibitor._id">
            <td>{{ exhibitor.tagNum }}</td>
            <td>{{ exhibitor.saleNum }}</td>
            <td>{{ exhibitor.species }}</td>
						<td>{{ exhibitor.fairWeight }}</td>
						<td>{{ exhibitor.firstName }}</td>
						<td>{{ exhibitor.lastName }}</td>
						<td>{{ exhibitor.clubName }}</td>
						<td>Picture_link</td>
						<td>Edit Delete</td>
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
