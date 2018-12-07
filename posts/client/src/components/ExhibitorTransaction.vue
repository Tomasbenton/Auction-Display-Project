<template>
  <div id="exhibitorTransaction">
    <router-link v-bind:to="{ name: 'Admin' }">
      <button class="topBtn dashboardBtn"><span class="arrow">&#8592;</span> Return to Dashboard</button>
    </router-link>
    <router-link to="/transaction/addon">
      <button class="topBtn"><span class="arrow">&#8596;</span> Go to Addon Transaction Table</button>
    </router-link>
    <main class="container">
      <h1>Create Buyer Transaction</h1>
      Sale Number:
      <label class="errorLabel" for="saleNumber" >{{ errors.first('saleNumber') }}</label>
      <input v-validate="'required|numeric'" type="number" v-on:input="getExhibitorBySaleNum" name="saleNumber" v-model="saleNumber">
      <label class="nameLabel">Exhibitor Name: {{ exhibitorName }}</label>
      <router-link v-bind:to="{ name: 'Display', params: { 'saleNumber': saleNumber }}">
        <button>Display Current Exhibitor</button>
      </router-link>
      Bidder Number:
      <label class="errorLabel" for="saleNumber" >{{ errors.first('bidderNumber') }}</label>
      <input v-validate="'required|numeric'" type="number" v-on:input="getBuyerByBidderNum" name="bidderNumber" v-model="bidderNumber">
      <label class="nameLabel">Buyer Name: {{ buyerName }}</label>
      <button id="addtlBuyer" name="addtlBuyer">(+) Add Additional Buyer</button>
      Amount:
      <label class="errorLabel" for="purchaseAmount" >{{ errors.first('purchaseAmount') }}</label>
      <input v-validate="'required|numeric'" type="number" name="purchaseAmount" v-model="purchaseAmount">
      <button name="addBtn">Submit & Go To Next Sale</button>
    </main>
  </div>
</template>

<script>
  export default {
    name: 'ExhibitorTransaction',
    data () {
      return {
      saleNumber: 0,
      bidderNumber: 0,
      purchaseAmount: 0,
      exhibitorName: '',
      buyerName: ''
      }
    },
    methods: {
      async getExhibitorBySaleNum () {
        let uri = `http://${process.env.HOST_NAME}:8081/exhibitor/saleNumber/${this.saleNumber}`
        await this.axios.get(uri).then(response => {
          if (response.data == null) {
            this.exhibitorName = `Exhibitor with sale number ${this.saleNumber} does not exist.` 
          }
          else {
            this.exhibitorName = response.data.fullName
          }
        })
      },
      async getBuyerByBidderNum () {
        let uri = `http://${process.env.HOST_NAME}:8081/buyer/bidderNumber/${this.bidderNumber}`
        await this.axios.get(uri).then(response => {
          if (response.data == null) {
            this.buyerName = `Buyer with bidder number ${this.bidderNumber} does not exist.` 
          }
          else {
            this.buyerName = response.data.name
          }
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

  #addtlBuyer{
    width: 50%;
    /* float: left; */
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
    margin-bottom: 2px;
  }

  button{
    display: block;
    margin: 10px 0px 30px auto;
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
