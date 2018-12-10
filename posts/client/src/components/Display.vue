<template>
    <div id="display">
      <section v-if="saleNumber">
        <!-- <section class="currentSale" v-if="(saleNumber !== previousSaleNumber) && exhibitors.length"> -->
        <section class="currentSale" v-if="showCurrentSale === true">
          <h1>Current Sale:</h1>
          <h2>Name: {{exhibitor.fullName}}</h2>
          <h2>Species: {{exhibitor.species}}</h2>
          <h2>Weight: {{exhibitor.checkInWeight}}</h2>
        </section>
        <section class="currentSale" v-else>
          <h1>Current Sale:</h1>
          <h2>Please wait for the next sale</h2>
        </section>
        <!-- <section class="previousSale" v-if="exhibitors.length && buyers.length && transactions.length">
          <h1>Previous Sale</h1>
          <h2>Name: {{ exhibitors[previousIndex].fullName }}</h2>
          <h2>Species: {{ exhibitors[previousIndex].species }} </h2>
          <h2>Weight: {{ exhibitors[previousIndex].checkInWeight }}</h2>
          <h2>Club Name: {{ exhibitors[previousIndex].clubName }}</h2>
          <div class="buyerInfo">
            <h2>Buyer: {{ buyers[bidderIndex].name }}</h2>
            <h2>Purchase Amount: ${{ transactions[purchaseIndex].purchaseAmount }}</h2>
          </div>
        </section> -->
        <section class="previousSale" v-if="showCurrentSale === false">
          <h1>Previous Sale</h1>
          <h2>Name: {{ exhibitor.fullName }}</h2>
          <h2>Species: {{ exhibitor.species }}</h2>
          <h2>Check in weight: {{ exhibitor.checkInWeight }}</h2>
          <h2>Total Purchase Amount: {{ purchaseAmount }}</h2>
          <h2>Buyers:</h2>
          <section v-if="bidders.length" v-for="bidder in bidders" :key="bidder._id">
            <h2> {{bidder.name}} </h2>
          </section>
          <h2>Addons:</h2>
        </section>
        <section class="previousSale" v-else>
          <h1>Previous Sale</h1>
          <h2>There are no previous sales</h2>
        </section>
      </section>
      <section v-else>
        Loading...
      </section>
    </div>
</template>

<script>
  import {mapState, mapActions} from 'vuex'
  export default {
    data() {
      return {
        users: [],
        exhibitor: [],
        previousExhibitor: [],
        transactions: [],
        buyers: [],
        previousSaleNumber: 0,
        displayID: 0,
        currentSaleCheck: false,
        previousSaleCheck: false,
        num: 0,
        purchaseAmount: 0,
        bidderNumbers: 0,
        bidders: [],
        showCurrentSale: null
      }
    },
    computed: {
      ...mapState({
        index: state => state.index,
        previousIndex: state => state.previousIndex,
        bidderIndex: state => state.bidderIndex,
        saleNumber: state => state.saleNumber
        // previousSaleNumber: state => state.previousSaleNumber,
        // bidderNumber: state => state.bidderNumber
        // purchaseAmount: state => state.purchaseAmount
      })
    },
    created: function() {
      setInterval(() => this.fetchSaleNumber(), 500)
      // setInterval(() => this.displayCurrentSale(), 1000)
      // setInterval(() => this.displayPreviousSale(), 1000)
      this.fetchSaleNumber()
      // this.fetchTransactions()
      // this.fetchBiddersNumbers()
      // this.fetchBuyers()
      // this.fetchTransactions()
      // this.fetchExhibitor()
    },
    methods: {
      async fetchSaleNumber() {
        let uri = `http://${process.env.HOST_NAME}:8081/display`
        await this.axios.get(uri).then(response => {
          this.displayID = response.data[0]._id
          this.setSaleNumber(response.data[0].saleNumber)
          this.currentSaleCheck = response.data[0].currentSaleCheck
          this.previousSaleCheck = response.data[0].previousSaleCheck
          this.showCurrentSale = true
        })
        if (this.currentSaleCheck === true) this.displayCurrentSale()
        if (this.previousSaleCheck === true) {
          this.displayPreviousSale()
        }
        this.fetchTransactions()
        this.fetchExhibitor()
        this.fetchBuyers()
        this.hideCurrentSale()
        // this.fetchPreviousExhibitor()
      },
      async displayCurrentSale() {
        let uri = `http://${process.env.HOST_NAME}:8081/display/${this.displayID}`
        this.currentSaleCheck = false
        this.showCurrentSale = true
        let updatedCheck = {
          displayID: this.displayID,
          saleNumber: this.saleNumber,
          currentSaleCheck: this.currentSaleCheck,
          previousSaleCheck: this.previousSaleCheck,
          showCurrentSale: this.showCurrentSale
        }
        await this.axios.put(uri, updatedCheck).then(response => { 
          window.location.reload()
        })
      },
      async displayPreviousSale() {
        let uri = `http://${process.env.HOST_NAME}:8081/display/${this.displayID}`
        this.previousSaleCheck = false
        this.showCurrentSale = false
        let updatedCheck = {
          displayID: this.displayID,
          saleNumber: this.saleNumber,
          currentSaleCheck: this.currentSaleCheck,
          previousSaleCheck: this.previousSaleCheck,
          showCurrentSale: this.showCurrentSale
        }
        await this.axios.put(uri, updatedCheck).then(response => {
          window.location.reload()
        })
      },
      async hideCurrentSale() {
        let uri = `http://${process.env.HOST_NAME}:8081/display/${this.displayID}`
        this.showCurrentSale = false
        let updatedCheck = {
          displayID: this.displayID,
          saleNumber: this.saleNumber,
          currentSaleCheck: this.currentSaleCheck,
          previousSaleCheck: this.previousSaleCheck,
          showCurrentSale: this.showCurrentSale
        }
        await this.axios.put(uri, updatedCheck).then(response => { 
        })
      },
      async fetchExhibitor() {
        let url = `http://${process.env.HOST_NAME}:8081/exhibitor/saleNumber/${this.saleNumber}`
        console.log(this.saleNumber)
        await this.axios.get(url).then(response => {
          this.exhibitor = response.data
        })
      },
      async fetchTransactions() {
        let url = `http://${process.env.HOST_NAME}:8081/transaction/saleNumber/${this.saleNumber}`
        await this.axios.get(url).then(response => {
          this.transaction = response.data
          if (response.data.length) this.purchaseAmount = response.data[0].purchaseAmount
          else this.transactions = null
        })
      },
      async fetchBuyers() {
        if (this.buyers.length > 1) {
          for (let i = 0; i < this.buyers.length; i++) {
            let url = `http://${process.env.HOST_NAME}:8081/buyer/bidderNumber/${this.buyers[i]}`
            await this.axios.get(url).then(response => {
              this.bidders[i] = response.data
            })
          }
        } else {
          let url = `http://${process.env.HOST_NAME}:8081/buyer/bidderNumber/${this.buyers}`
          await this.axios.get(url).then(response => {
            this.bidders = response.data
          })
        }
      },
      async fetchBiddersNumbers() {
        // ideally, there should be only one transaction per sale number
        let url = `http://${process.env.HOST_NAME}:8081/transaction/saleNumber/${this.saleNumber}`
        await this.axios.get(url).then(response => {
          this.bidderNumbers = response.data[0].bidders
        })
        this.parseBidderNumbers()
      },
      parseBidderNumbers() {
        if (this.bidderNumbers.length > 1) {
          let array = this.bidderNumbers.split("-")
          for (let i = 0; i < array.length; i++) {
            this.buyers[i] = parseInt(array[i])
          }
        } else {
          this.buyers = parseInt(this.bidderNumbers)
        }
      },
      ...mapActions(['setIndex', 'setPreviousIndex', 'setBidderIndex', 'setSaleNumber', 'setPreviousSaleNumber', 'setBidderNumber', 'setPurchaseAmount'])
    }
  }
</script>

<style scoped>
  .currentSale{
    width: 40%;
    background-color: #339966;
  }
  .previousSale{
    width: 60%;
  }
  .currentSale, .previousSale{
    height: 100vh;
    padding: 25px 50px;
    float: left;
  }
  .currentSale h1, .currentSale h2{
    color: #ffffff;
  }
  .buyerInfo{
    padding: 5px 10px;
    border: 3px solid #339966;
    text-align: center;
  }
</style>
