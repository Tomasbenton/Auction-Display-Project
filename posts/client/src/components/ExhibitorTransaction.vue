<template>
  <div id="exhibitorTransaction">
    <router-link v-bind:to="{ name: 'Admin' }">
      <button class="topBtn dashboardBtn"><span class="arrow">&#8592;</span> Return to Dashboard</button>
    </router-link>
    <router-link to="/transaction/addon">
      <button class="topBtn"><span class="arrow">&#8596;</span> Go to Addon Transaction Table</button>
    </router-link>
    <main class="container">
      <h1>Exhibitor Transaction Table</h1>
      Sale Number:
      <input type="number" name="saleNumber" v-model="saleNumber">
      <button @click="displayCurrentExhibitor">Display Current Exhibitor</button>
      Bidder Number:
      <input type="number" name="bidderNumber" disabled v-model="bidderNumber">
      Amount:
      <input type="number" name="purchaseAmount" disabled v-model="purchaseAmount">
      <button name="addBtn" @click="addNewTransaction" disabled>Submit</button>
    </main>
  </div>
</template>

<script>
  export default {
    name: 'ExhibitorTransaction',
    data () {
      return {
        users: [],
        id: 0,
        exhibitors: [],
        transactions: [],
        saleNumber: null,
        bidderNumber: 0,
        purchaseAmount: 0,
        purchaseType: "Buyer"
      }
    },
    created: function () {
      this.fetchUser()
      this.fetchTransactions()
    },
    methods: {
      async fetchUser() {
        let url = `http://${process.env.HOST_NAME}:8081/user`
        await this.axios.get(url).then(response => {
          this.users = response.data
          for (let i = 0; i < this.users.length; i++) {
            if (this.users[i].username === "Admin") this.id = this.users[i]._id
          }
        })
      },
      async displayCurrentExhibitor() {
        // add input validity, only numbers
        // clicking the display button should only enable the other fields if it's valid
        let url = `http://${process.env.HOST_NAME}:8081/user/${this.id}`
        let transaction = {
          saleNumber: this.saleNumber
        }
        await this.axios.put(url, transaction).then(response => {
          console.log(response)
          document.querySelector("input[name='bidderNumber']").removeAttribute("disabled")
          document.querySelector("input[name='purchaseAmount']").removeAttribute("disabled")
          document.querySelector("button[name='addBtn']").removeAttribute("disabled")
        })
      },
      async addNewTransaction() {
        let newTransaction = {
          saleNumber: this.saleNumber,
          bidderNumber: this.bidderNumber,
          purchaseAmount: this.purchaseAmount,
          purchaseType: this.purchaseType
        }
        let url = `http://${process.env.HOST_NAME}:8081/transaction/add`
        await this.axios.post(url, newTransaction).then((response) => { console.log(response)
        })
      },
      async fetchTransactions() {
        let url = `http://${process.env.HOST_NAME}:8081/transaction/`
        await this.axios.get(url).then((response) => {
          this.transactions = response.data
        })
      },
      async fetchExhibitors() {
        let url = `http://${process.env.HOST_NAME}:8081/exhibitor`
        await this.axios.get(url).then((response) => {
          this.exhibitors = response.data
        })
      }
    }
  }
</script>

<style scoped>
  #exhibitorTransaction{
    width: 100%;
    height: 100%;
    text-align: center;
    color: #404040;
    font-size: 14px;
    padding-top: 100px;
  }

  .container{
    width: 500px;
    display: block;
    margin: 75px auto 25px auto;
    text-align: left;
    border:1px solid #bfbfbf;
    padding: 25px 25px 50px 25px;
    border-radius: 5px;
  }

  h1{
    text-align: left;
  }

  input{
    width: 100%;
    height: 50px;
    margin-top: 10px;
    border: 1px solid #f1f1f1;
    font-weight: 600;
  }

  button{
    display: block;
    margin: -25px 0px 30px auto;
    padding: 5px 10px;
    width: 100%;
    height: 50px;
    font-size: 14px;
    font-weight: 600;
    border-radius: 0px;
  }

  .topBtn{
    width: 300px;
    height: 60px;
    padding-bottom: 10px;
    display: inline-block;
  }

  .arrow{
    font-size: 25px;
  }

  .errorLabel{
    font-size: 12px;
    color: #ff0000;
  }
</style>
