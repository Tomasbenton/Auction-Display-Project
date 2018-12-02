<template>
  <div id="AddonTransaction">
    <h1>Addon Transaction Table</h1>
    Sale Number: <input type="number" v-validate="required|numeric" name="saleNumber" v-model="saleNumber">
    <button @click="displayCurrentSale">Enter</button>
    Bidder Number: <input type="number" v-validate="required|numeric" name="bidderNumber" v-model="bidderNumber">
    Amount: <input type="number" v-validate="required|numeric" name="purchaseAmount" v-model="purchaseAmount">
    <button @click="validate">Submit</button>
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
  #AddonTransaction{
    width: 450px;
    height: 100%;
    margin: 0 auto;
    margin-top: 100px;
    text-align: left;
    color: #339966;
  }

  h1{
    text-align: left;
  }

  input{
    width: 100%;
    height: 40px;
    margin-top: 10px;
  }

  button{
    display: block;
    margin-left: auto;
    padding: 5px 10px;
    width: 100px;
    height: 40px;
  }
</style>
