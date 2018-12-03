<template>
  <div id="manageExhibitors">
    <div id="control">
      <h1>Exhibitors</h1>
      <!--<input type="text" placeholder="Search tag #">-->
      <router-link v-bind:to="{ name: 'NewExhibitor' }">
        <button class="add">Add</button>
      </router-link>
      <button @click=deleteAll()>Delete All Exhibitors</button>
      <button @click=getCsvReport()>Export All Data</button>
    </div>
    <table class="dataTable">
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
        <td><strong>Action</strong></td>
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
        <router-link class="link" v-bind:to="{ name: 'EditExhibitor', params: { id: exhibitor._id } }">Edit</router-link> |
        <a class="link" @click="deleteExhibitor(exhibitor._id)">Delete</a>
      </tr>
    </table>
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
        // let uri = 'http://localhost:8081/exhibitor'
        let uri = `http://${process.env.HOST_NAME}:8081/exhibitor`
        this.axios.get(uri).then(response => {
          this.exhibitors = response.data
        })
      },
			async deleteExhibitor (id) {
				// let uri = 'http://localhost:8081/exhibitor/' + id
				let uri = `http://${process.env.HOST_NAME}:8081/exhibitor/` + id
	      await this.axios.delete(uri).then((response) => {
	        console.log(response)
	      })
	      this.fetchExhibitors()
	      this.$router.push({ name: 'Manage' })
    	},
			deleteAll() {
				// let uri = 'http://localhost:8081/exhibitor/'
				let uri = `http://${process.env.HOST_NAME}:8081/exhibitor/`
				var delCheck = confirm("Are you sure you want to delete ALL Exhibitors?")
				if (delCheck) {
	        for (var i = 0; i < this.exhibitors.length; i++) {
						// uri = 'http://localhost:8081/exhibitor/' + this.exhibitors[i]._id
						uri = `http://${process.env.HOST_NAME}:8081/exhibitor/` + this.exhibitors[i]._id
						this.axios.delete(uri).then((response) => {
							console.log(response)
						})
					}
					this.exhibitors = []
		      this.$router.push({ name: 'Manage' })
	      }
			},
			async getCsvReport() {
	      const jsonUrl = `http://${process.env.HOST_NAME}:8081/exhibitor/`
	      const res = await fetch(jsonUrl)
	      const json = await res.json()

        const data = json.map(row => ({
          saleNumber: row.saleNumber,
          fullName: row.fullName,
          tag: row.tag,
          species: row.species,
          animalDescription: row.animalDescription,
          checkInWeight: row.checkInWeight,
          clubName: row.clubName,
          showClassName: row.showClassName,
          placing: row.placing,
          buyback: row.buyback
        }))
        const csvData = this.objectToCsv(data)
        this.download(csvData)
      },
      objectToCsv (data) {
        const csvRows = []

        const headers = Object.keys(data[0])
        csvRows.push(headers.join(','))

        for (const row of data) {
          const values = headers.map(header => {
            const escaped = ('' + row[header]).replace(/"/g, '\\"')
            return `"${escaped}"`
          })
          csvRows.push(values.join(','))
        };

        return csvRows.join('\n')
      },
      download(data) {
        const blob = new Blob([data], { type: 'text/csv' })
        const url = window.URL.createObjectURL(blob)
        const a = document.createElement('a')
        a.setAttribute('hidden', '')
        a.setAttribute('href', url)
        a.setAttribute('download', 'exhibitorData.csv')
        document.body.appendChild(a)
        a.click()
        document.body.removeChild(a)
      }
    }
  }
</script>

<style scoped>
  button{
    width: 200px;
    height: 60px;
    background-color: #f1f1f1;
    color: #339966;
    border: none;
    margin: 2px;
  }

  button:hover{
    background-color: #339966;
    color: #f1f1f1;
  }

  #control{
    text-align: left;
    display: block;
    margin: 0 auto;
  }

  .dataTable{
    margin: 15px 0px;
    padding: 10px 15px;
    border: 1px solid #339966;
    color: #404040;
    width: 100%;
  }

  td{
    margin: 5px 10px;
    padding: 5px 10px;
  }

  strong{
    color: #339966;
    font-size: 14px;
    text-transform: uppercase;
  }
</style>
