<template>
  <div id="addonTransaction">
    <router-link v-bind:to="{ name: 'Admin' }">
      <button class="topBtn dashboardBtn"><span class="arrow">&#8592;</span> Return to Dashboard</button>
    </router-link>
    <router-link to="/transaction/exhibitor">
      <button class="topBtn"><span class="arrow">&#8596;</span> Go to Exhibitor Transaction Table</button>
    </router-link>
    <div class="container">
      <h1>Addon Transaction Table</h1>
      Sale Number: <input type="number" min="0" v-validate="required|numeric" name="saleNumber" v-model="saleNumber">
      <p class="errorLabel" for="saleNumber">{{ errors.first('saleNumber') }}</p>
      <button>Enter</button>
      Bidder Number: <input type="number" min="0" v-validate="required|numeric" name="bidderNumber" v-model="bidderNumber">
      <p class="errorLabel">{{ errors.first('bidderNumber') }}</p>
      Amount: <input type="number" min="0" v-validate="required|numeric" name="purchaseAmount" v-model="purchaseAmount">
      <p class="errorLabel">{{ errors.first('purchaseAmount') }}</p>
      <button @click="validate">Submit</button>
    </div>
  </div>
</template>

<script>
  export default{
    name: 'AddonTransaction',
    data () {
      return {
        saleNumber: null,
        bidderNumber: null,
        purchaseAmount: null,
        purchaseType: "Addon"
      }
    },
    methods: {
      validate() {
        this.$validator.validateAll()
        if (!this.errors.any()) this.addNewTransaction()
      },
      async addNewTransaction() {
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
  #addonTransaction{
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
</style>
