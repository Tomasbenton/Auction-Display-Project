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
      <button onclick="document.getElementById('file').click();">Import Buyers</button>
      <input type="file" style="display:none;" id="file" name="file" @change="loadCSV($event)">
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
    <div>
    </div>
  </div>

</template>

<script>
  export default {
    name: 'Buyer',
    data() {
      return {
        buyers: [],
        index: 0,
        channel_name: '',
        channel_fields: [],
        channel_entries: [],
        parse_header: [],
        parse_csv: [],
        sortOrders: {},
        sortKey: '',
        bidderNumber: null,
        name: null,
        contactName: null,
        phone: null,
        email: null,
        logoFileName: null
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
    },
    sortBy: function (key) {
      var vm = this
      vm.sortKey = key
      vm.sortOrders[key] = vm.sortOrders[key] * -1
    },
    csvJSON(csv) {
      var vm = this
      var lines = csv.split("\n")
      var result = []
      var headers = lines[0].split(",")
      vm.parse_header = lines[0].split(",")
      lines[0].split(",").forEach(function (key) {
        vm.sortOrders[key] = 1
      })

      lines.map(function(line, indexLine) {
        if (indexLine < 1) return // Jump header line

        var obj = {}
        var currentline = line.split(",")

        headers.map(function(header, indexHeader) {
          obj[header] = currentline[indexHeader].replace(/"/g, '').replace(null, '')
        })

        vm.addBuyer(obj)
        result.push(obj)
      })
      result.pop() // remove the last item because undefined values
      return result // JavaScript object
    },
    loadCSV(e) {
      var vm = this
      if (window.FileReader) {
        var reader = new FileReader()
        reader.readAsText(e.target.files[0])
        // Handle errors load
        reader.onload = function(event) {
          var csv = event.target.result
          vm.parse_csv = vm.csvJSON(csv)
        }
        reader.onerror = function(evt) {
          if (evt.target.error.name == "NotReadableError") {
            alert("Cannot read file !")
          }
        }
      } else {
        alert('FileReader are not supported in this browser.')
      }
    },
    async addBuyer (obj) {
      let newBuyer = {
        bidderNumber: obj.bidderNumber,
        name: obj.name,
        contactName: obj.contactName,
        phone: obj.phone,
        email: obj.email,
        logoFileName: obj.logoFileName
      }
      let uri = `http://${process.env.HOST_NAME}:8081/buyer/add`
      this.axios.post(uri, newBuyer).then((response) => {
        console.log(response)
      })
      this.fetchBuyers()
      this.$router.push({ name: 'Manage' })
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
