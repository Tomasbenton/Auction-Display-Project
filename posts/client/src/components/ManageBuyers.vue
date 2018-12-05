<template>
  <div id="manageBuyers">
    <div id="control">
      <h1>Buyers</h1>
      <!--<input type="text" placeholder="Search tag #">
      <button>Submit</button>-->
      <router-link v-bind:to="{ name: 'NewBuyer' }">
        <button class="add">Add New Buyer</button>
      </router-link>
      <button @click=deleteAll()>Delete All Buyers</button>
      <button @click=getCsvReport()>Export All Buyers</button>
    </div>
    <table class="dataTable">
      <tr>
        <td><strong>Bidder Number</strong></td>
        <td><strong>Name</strong></td>
        <td><strong>Contact Name</strong></td>
        <td><strong>Phone</strong></td>
        <td><strong>Email</strong></td>
        <td><strong>Logo Filename</strong></td>
        <td><strong>Action</strong></td>
      </tr>
      <tr v-for="buyer in buyers" :key="buyer._id">
        <td>{{ buyer.bidderNumber }}</td>
        <td>{{ buyer.name }}</td>
        <td>{{ buyer.contactName }}</td>
        <td>{{ buyer.phone }}</td>
        <td>{{ buyer.email }}</td>
        <td>{{ buyer.logoFileName }}</td>
        <router-link class="link" v-bind:to="{ name: 'EditBuyer', params: { id: buyer._id } }">Edit</router-link> |
        <a class="link" @click="deleteBuyer(buyer._id)">Delete</a>
      </tr>
    </table>
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
				this.buyers = []
	      this.$router.push({ name: 'Manage' })
      }
    },
    async getCsvReport() {
      const jsonUrl = `http://${process.env.HOST_NAME}:8081/buyer/`
      const res = await fetch(jsonUrl)
      const json = await res.json()

      const data = json.map(row => ({
        bidderNumber: row.bidderNumber,
        name: row.name,
        contactName: row.contactName,
        phone: row.phone,
        email: row.email,
        logoFileName: row.logoFileName
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
      a.setAttribute('download', 'buyerData.csv')
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

  .link{
    color: #339966;
    text-transform: uppercase;
  }
</style>
