<template>
    <div id="display">
      <section class="currentSale" v-if="previousSaleNumber != saleNumber">
        <h1>Current Sale:</h1>
        <h2>Name: {{exhibitor.fullName}}</h2>
        <h2>Species: {{exhibitor.species}}</h2>
        <h2>Weight: {{exhibitor.checkInWeight}}</h2>
      </section>
      <section class="currentSale" v-else>
        <h1>Current Sale:</h1>
        <h2>Please wait for the next sale</h2>
      </section>
      <section class="previousSale" v-if="previousExhibitor">
        <h1>Previous Sale</h1>
        <h2>Name: {{ previousExhibitor.fullName }}</h2>
        <h2>Species: {{ previousExhibitor.species }}</h2>
        <h2>Check in weight: {{ previousExhibitor.checkInWeight }}</h2>
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
        transaction: [],
        buyers: [],
        previousSaleNumber: 0,
        displayID: 0,
        previousSaleCheck: false,
        num: 0,
        purchaseAmount: 0,
        bidderNumbers: 0,
        bidders: [],
        showCurrentSale: false,
        showPreviousSale: false,
        showCurrentSaleSection: false,
        showPreviousSaleSection: false
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
      setInterval(() => this.fetchData(), 500)
      this.fetchData()
    },
    methods: {
      async fetchData() {
        // retrieve data for comparison
        let uri = `http://${process.env.HOST_NAME}:8081/display`
        await this.axios.get(uri).then(response => {
          if (response.data.length >= 1) {
            this.displayID = response.data[0]._id
            this.setSaleNumber(response.data[0].saleNumber)
            this.showCurrentSale = response.data[0].showCurrentSale
            this.previousSaleNumber = response.data[0].previousSaleNumber
            this.showPreviousSale = response.data[0].showPreviousSale
          }
        })
        this.fetchExhibitor()
        this.fetchTransaction()
        this.fetchPreviousExhibitor()
        // checks flag, retrieves new sale number, then reloads pages in the display functions
        if (this.showCurrentSale === true) {
          this.displayCurrentSale()
        }
        if (this.showPreviousSale === true) {
          this.displayPreviousSale()
        }
      },
      async displayCurrentSale() {
        console.log("show current sale")
        let uri = `http://${process.env.HOST_NAME}:8081/display/${this.displayID}`
        this.showCurrentSale = false
        console.log(this.showCurrentSaleSection)
        let state = {
          saleNumber: this.saleNumber,
          previousSaleNumber: this.previousSaleNumber,
          showCurrentSale: this.showCurrentSale,
          showPreviousSale: this.showPreviousSale,
          showCurrentSaleSection: this.showCurrentSaleSection,
          showPreviousSaleSection: this.showPreviousSaleSection
        }
        await this.axios.put(uri, state).then(response => {})
      },
      async displayPreviousSale() {
        let uri = `http://${process.env.HOST_NAME}:8081/display/${this.displayID}`
        this.showPreviousSale = false
        // this.showPreviousSaleSection = true
        // this.showCurrentSaleSection = false
        let updatedCheck = {
          saleNumber: this.saleNumber,
          previousSaleNumber: this.previousSaleNumber,
          showCurrentSale: this.showCurrentSale,
          showPreviousSale: this.showPreviousSale,
          showCurrentSaleSection: this.showCurrentSaleSection,
          showPreviousSaleSection: this.showPreviousSaleSection
        }
        await this.axios.put(uri, updatedCheck).then(response => { })
        window.location.reload()
      },
      /* async hideCurrentSale() {
        let uri = `http://${process.env.HOST_NAME}:8081/display/${this.displayID}`
        this.showCurrentSale = false
        let updatedCheck = {
          displayID: this.displayID,
          saleNumber: this.saleNumber,
          previousSaleCheck: this.previousSaleCheck,
          showCurrentSale: this.showCurrentSale
        }
        await this.axios.put(uri, updatedCheck).then(response => { 
        })
      }, */
      async fetchExhibitor() {
        // fetches the current exhibitor by its sale number
        let url = `http://${process.env.HOST_NAME}:8081/exhibitor/saleNumber/${this.saleNumber}`
        await this.axios.get(url).then(response => {
          this.exhibitor = response.data
        })
      },
      async fetchPreviousExhibitor() {
        // fetches the previous exhibitor by its sale number
        let url = `http://${process.env.HOST_NAME}:8081/exhibitor/saleNumber/${this.previousSaleNumber}`
        await this.axios.get(url).then(response => {
          this.previousExhibitor = response.data
        })
      },
      async fetchTransaction() {
        let url = `http://${process.env.HOST_NAME}:8081/transaction/saleNumber/${this.saleNumber}`
        await this.axios.get(url).then(response => {
          if (response.data.length > 0) {
            this.transaction = response.data
          }
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
