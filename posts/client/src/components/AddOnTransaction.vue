<template>
  <div id="addonTransaction">
    <router-link v-bind:to="{ name: 'Admin' }">
      <button class="topBtn dashboardBtn"><span class="arrow">&#8592;</span> Return to Dashboard</button>
    </router-link>
    <router-link to="/transaction/exhibitor">
      <button class="topBtn"><span class="arrow">&#8596;</span> Go to Buyer Transaction Table</button>
    </router-link>
    <div class="container">
      <h1>Addon Transaction Table</h1>
      Sale Number: 
      <input type="number" name="saleNumber" v-model="saleNumber">
      <button @click="displayCurrentExhibitor">Submit Current Sale</button>
      Bidder Number: 
      <input type="number" name="bidderNumber" v-model="bidderNumber">
      Amount:
      <input type="number" name="purchaseAmount" v-model="purchaseAmount">
      <button name="addBtn" @click="addNewTransaction">Submit</button>
    </div>
  </div>
</template>

<script>
  import {mapState, mapActions} from 'vuex'
  export default {
    name: 'AddonTransaction',
    data () {
      return {
        users: [],
        saleNumber: null,
        bidderNumber: 0,
        purchaseAmount: 0,
        purchaseType: "Addon",
        currentSaleCheck: false,
        previousSaleCheck: false,
        displayID: 0
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
      async fetchDisplay() {
        let url = `http://${process.env.HOST_NAME}:8081/display`
        await this.axios.get(url).then(response => {
          this.displayID = response.data[0]._id
        })
      },
      async displayCurrentExhibitor() {
        this.currentSaleCheck = true
        let updatedSaleNumber = {
          saleNumber: this.saleNumber,
          currentSaleCheck: this.currentSaleCheck,
          previousSaleCheck: this.previousSaleCheck
        }
        let uri = `http://${process.env.HOST_NAME}:8081/display/${this.displayID}`
        await this.axios.put(uri, updatedSaleNumber).then((response) => { })
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
      ...mapActions(['setUserID'])
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
