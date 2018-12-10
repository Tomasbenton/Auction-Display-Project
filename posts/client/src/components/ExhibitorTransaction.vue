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
      <button @click="displayCurrentExhibitor">Submit Current Sale</button>
      Bidder Number:
      <label class="errorLabel" for="saleNumber" >{{ errors.first('bidderNumber') }}</label>
      <input v-validate="'required|numeric'" type="number" v-on:input="getBuyerByBidderNum" name="bidderNumber" v-model="bidderNumber">
      <button @click="addNewBidder">Add Another Bidder</button>
      <label class="nameLabel">Buyer Name: {{ buyerName }}</label>
      Amount:
      <label class="errorLabel" for="purchaseAmount" >{{ errors.first('purchaseAmount') }}</label>
      <input v-validate="'required|numeric'" type="number" name="purchaseAmount" v-model="purchaseAmount">
      <button name="addBtn" @click="addNewTransaction">Submit & Go To Next Sale</button>
    </main>
  </div>
</template>

<script>
  import {mapState, mapActions} from 'vuex'
  export default {
    name: 'ExhibitorTransaction',
    data () {
      return {
        users: [],
        saleNumber: 0,
        bidderNumber: 0,
        purchaseAmount: 0,
        buyerName: "",
        exhibitorName: "",
        purchaseType: "Buyer",
        currentSaleCheck: false,
        previousSaleCheck: false,
        showCurrentSale: false,
        displayID: 0,
        bidders: []
      }
    },
    computed: {
      ...mapState({
        userID: state => state.userID
      })
    },
    created: function () {
      this.fetchDisplay()
    },
    methods: {
      /*
        FUNCTIONALITY
        1) display the current exhibitor
          - change sale number in display
          - check for data
          - reload paege
        2) have an array of bidders if they want to add more
          - store as string
        3) add a new transaction
        --- add input validation for bidder field
      */
      async fetchDisplay() {
        let url = `http://${process.env.HOST_NAME}:8081/display`
        await this.axios.get(url).then(response => {
          this.displayID = response.data[0]._id
        })
      },
      async displayCurrentExhibitor() {
        this.currentSaleCheck = true
        this.showCurrentSale = true
        let updatedSaleNumber = {
          saleNumber: this.saleNumber,
          currentSaleCheck: this.currentSaleCheck,
          previousSaleCheck: this.previousSaleCheck,
          showCurrentSale: this.showCurrentSale
        }
        console.log(this.showCurrentSale)
        let uri = `http://${process.env.HOST_NAME}:8081/display/${this.displayID}`
        await this.axios.put(uri, updatedSaleNumber).then((response) => { })
      },
      async addNewBidder() {
        this.bidders.push(this.bidderNumber)
        this.bidderNumber = ""
      },
      async addNewTransaction() {
        // checks how many bidders there are
        if (this.bidders.length > 1) this.bidders = this.bidders.join('-')
        else this.bidders = this.bidderNumber.toString()
        console.log(this.bidders)

        let newTransaction = {
          saleNumber: this.saleNumber,
          bidders: this.bidders,
          purchaseAmount: this.purchaseAmount,
          purchaseType: this.purchaseType
        }
        let uri = `http://${process.env.HOST_NAME}:8081/transaction/add`
        await this.axios.post(uri, newTransaction).then((response) => {
          console.log(response)
        })
        this.previousSaleCheck = true
        this.showCurrentSale = false
        let updatedCheck = {
          saleNumber: this.saleNumber,
          currentSaleCheck: this.currentSaleCheck,
          previousSaleCheck: this.previousSaleCheck,
          showCurrentSale: this.showCurrentSale
        }
        await this.axios.put(`http://${process.env.HOST_NAME}:8081/display/` + this.displayID, updatedCheck).then(response => { })
        this.bidders = []
      },
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
      },
      ...mapActions(['setUserID'])
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
    margin: 0px 0px 30px auto;
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
