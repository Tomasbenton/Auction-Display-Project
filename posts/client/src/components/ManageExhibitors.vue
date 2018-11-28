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
						<td><strong>Sale#</strong></td>
						<td><strong>Name</strong></td>
						<td><strong>Tag#</strong></td>
						<td><strong>Animal Description</strong></td>
						<td><strong>Weight</strong></td>
						<td><strong>Class Name</strong></td>
						<td><strong>Department</strong></td>
						<td><strong>Club</strong></td>
						<td><strong>Show Class</strong></td>
						<td><strong>Picture</strong></td>
						<td><strong>Action</strong></td>
          </tr>
          <tr v-for="exhibitor in exhibitors" :key="exhibitor._id">
            <td>{{ exhibitor.entrySaleNumber }}</td>
            <td>{{ exhibitor.fullName }}</td>
            <td>{{ exhibitor.tag }}</td>
						<td>{{ exhibitor.animalDescription }}</td>
						<td>{{ exhibitor.checkInWeight }}</td>
						<td>{{ exhibitor.className }}</td>
						<td>{{ exhibitor.departmentName }}</td>
						<td>{{ exhibitor.clubName }}</td>
						<td>{{ exhibitor.showClassName }}</td>
						<td>{{ exhibitor.pictureName }}</td>
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
    	}
    }
  }
</script>

<style>
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
