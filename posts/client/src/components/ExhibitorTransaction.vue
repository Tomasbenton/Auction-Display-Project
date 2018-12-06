<template>
  <div id="exhibitorTransaction">
    <router-link v-bind:to="{ name: 'Admin' }">
      <button class="topBtn"><span class="arrow">&#8592;</span> Return to Dashboard</button>
    </router-link>
    <router-link to="/transaction/addon">
      <button class="topBtn"><span class="arrow">&#8596;</span> Go to Addon Transaction Table</button>
    </router-link>
    <main class="container">
      <h1>Exhibitor Transaction Table</h1>
      Sale Number:
      <input type="number" name="saleNumber">
      <button @click="displayCurrentExhibitor">Enter</button>
      Bidder Number:
      <input type="number" name="bidderNumber">
      Amount:
      <input type="number" name="purchaseAmount">
      <button @click="addNewTransaction">Submit</button>
    </main>
  </div>
</template>

<script>
  export default {
    name: 'ExhibitorTransaction',
    data () {
      return {
        exhibitors: [],
        id: null,
        saleNumber: null,
        bidderNumber: null,
        purchaseAmount: null,
        purchaseType: "Buyer"
      }
    },
    created: function () {
      this.fetchExhibitors()
    },
    methods: {
      displayCurrentExhibitor() {
        this.saleNumber = parseInt(document.querySelector("input[name='saleNumber']").value)
        for (let i = 0; i < this.exhibitors.length; i++) {
          if (this.exhibitors[i].saleNumber === this.saleNumber) {
            this.id = this.exhibitors[i]._id
          }
        }
      },
      fetchExhibitors() {
        let url = `http://${process.env.HOST_NAME}:8081/exhibitor`
        this.axios.get(url).then(response => {
          this.exhibitors = response.data
        })
      },
      async addNewTransaction() {
        /*
          1) add a check to see whether sale number is in exhibitor table
          2) add confirmation messages
        */
        let newTransaction = {
          saleNumber: this.saleNumber,
          bidderNumber: this.bidderNumber,
          purchaseAmount: this.purchaseAmount,
          purchaseType: this.purchaseType
        }
        let url = `http://${process.env.HOST_NAME}:8081/transaction/add`
        this.axios.post(url, newTransaction).then((response) => { console.log(response)
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
