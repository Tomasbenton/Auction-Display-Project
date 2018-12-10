<template>
    <div id="display">
      <section v-if="exhibitor && previousExhibitor">
        <section class="currentSale" v-if="(previousSaleNumber != saleNumber)">
          <h1>Current Sale:</h1>
          <h2>Name: {{exhibitor.fullName}}</h2>
          <h2>Species: {{exhibitor.species}}</h2>
          <h2>Weight: {{exhibitor.checkInWeight}} lbs</h2>
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
          <h2>Total Purchase Amount: ${{ purchaseAmount }}</h2>
          <h2>Buyers:</h2>
          <section v-if="buyer !== null" v-for="buyer in buyers" :key="buyer._id">
            <h2> {{ buyer.name }} </h2>
          </section>
          <!-- <h2>Addons:</h2>
          <section v-if="addOn !== null" v-for="addOn in addOns" :key="addOn._id">
            <h2> {{ addOn.name }} </h2>
          </section> -->
        </section>
        <section class="previousSale" v-else>
          <h1>Previous Sale</h1>
          <h2>There are no previous sales</h2>
        </section>
      </section>
      <section v-else>
        Loading... Please submit a current sale.
      </section>
    </div>
</template>

<script>
  import {mapState, mapActions} from 'vuex'
  export default {
    data() {
      return {
        exhibitor: [],
        previousExhibitor: [],
        transaction: [],
        buyers: [],
        // addOnNumbers: [],
        // addOns: [],
        previousSaleNumber: 0,
        displayID: 0,
        purchaseAmount: 0,
        bidderNumber: 0,
        bidderNumbers: 0,
        bidders: [],
        showCurrentSale: false,
        showPreviousSale: false
      }
    },
    computed: {
      ...mapState({
        saleNumber: state => state.saleNumber
      })
    },
    created: function() {
      setInterval(() => this.fetchSaleNumber(), 1000)
      this.fetchSaleNumber()
    },
    methods: {
      async fetchSaleNumber() {
        // retrieve data for comparison
        let uri = `http://${process.env.HOST_NAME}:8081/display`
        await this.axios.get(uri).then(response => {
          if (response.data.length >= 1) {
            this.displayID = response.data[0]._id
            this.setSaleNumber(response.data[0].saleNumber)
            this.showCurrentSale = response.data[0].showCurrentSale
            this.showPreviousSale = response.data[0].showPreviousSale
          }
        })
        // checks flag, retrieves new sale number, then reloads pages in the display functions
        if (this.showCurrentSale === true) {
          this.displayCurrentSale()
        }
        if (this.showPreviousSale === true) {
          this.displayPreviousSale()
        }
        this.fetchData()
      },
      async fetchData() {
        // fetches all data
        this.fetchExhibitor()
        this.fetchPreviousExhibitor()
        this.fetchTransaction()
        this.fetchBuyers()
        // this.fetchAddOns()
        // this.fetchAddOnBuyers()
      },
      async displayCurrentSale() {
        let uri = `http://${process.env.HOST_NAME}:8081/display/${this.displayID}`
        this.showCurrentSale = false
        let state = {
          saleNumber: this.saleNumber,
          previousSaleNumber: this.previousSaleNumber,
          showCurrentSale: this.showCurrentSale,
          showPreviousSale: this.showPreviousSale
        }
        await this.axios.put(uri, state).then(response => {})
      },
      async displayPreviousSale() {
        let uri = `http://${process.env.HOST_NAME}:8081/display/${this.displayID}`
        this.showPreviousSale = false
        let updatedCheck = {
          saleNumber: this.saleNumber,
          previousSaleNumber: this.previousSaleNumber,
          showCurrentSale: this.showCurrentSale,
          showPreviousSale: this.showPreviousSale
        }
        await this.axios.put(uri, updatedCheck).then(response => { })
        window.location.reload()
      },
      async fetchExhibitor() {
        // fetches the current exhibitor by its sale number
        let url = `http://${process.env.HOST_NAME}:8081/exhibitor/saleNumber/${this.saleNumber}`
        await this.axios.get(url).then(response => {
          this.exhibitor = response.data
        })
      },
      async fetchPreviousExhibitor() {
        // gets sale number for most recent transaction
        await this.axios.get(`http://${process.env.HOST_NAME}:8081/transaction`).then(response => {
          if (response.data.length > 0) {
            this.previousSaleNumber = response.data[response.data.length - 1].saleNumber
          }
        })
        // fetches the previous exhibitor by its sale number
        let url = `http://${process.env.HOST_NAME}:8081/exhibitor/saleNumber/${this.previousSaleNumber}`
        await this.axios.get(url).then(response => {
          this.previousExhibitor = response.data
        })
      },
      async fetchTransaction() {
        let url = `http://${process.env.HOST_NAME}:8081/transaction/saleNumber/${this.previousSaleNumber}`
        await this.axios.get(url).then(response => {
          if (response.data.length > 0) {
            for (let i = 0; i < response.data.length; i++) {
              if (response.data[i].purchaseType === "Buyer") {
                this.bidderNumber = response.data[i].bidderNumber
                this.purchaseAmount = response.data[0].purchaseAmount
              }
            }
          }
        })
      },
      async fetchBuyers() {
        this.parseBidderNumber()
        // bad code, it's supposed to list all bidders
        /* if (this.bidderNumbers.length > 1) {
          for (let i = 0; i < this.bidderNumbers.length; i++) {
            let url = `http://${process.env.HOST_NAME}:8081/buyer/bidderNumber/${this.bidderNumbers[i]}`
            await this.axios.get(url).then(response => {
              this.buyers[i] = response.data
            })
          }
        } else { */
          let uri = `http://${process.env.HOST_NAME}:8081/buyer/bidderNumber/${this.bidderNumbers}`
          await this.axios.get(uri).then(response => {
            if (response.data !== null) this.buyers[0] = response.data
          })
        // }
      },
      /* async fetchAddOns() {
        let uri = `http://${process.env.HOST_NAME}:8081/transaction/saleNumber/${this.previousSaleNumber}`
        await this.axios.get(uri).then(response => {
          if (response.data.length > 0) {
            for (let i = 0; i < response.data.length; i++) {
              if (response.data[i].purchaseType === "Addon") {
                this.addOnNumbers[i] = response.data[i].bidderNumber
              }
            }
          }
        })
      },
      async fetchAddOnBuyers() {
        if (this.addOnNumbers.length > 1) {
          for (let i = 0; i < this.addOnNumbers.length; i++) {
            let uri = `http://${process.env.HOST_NAME}:8081/buyer/bidderNumber/${this.addOnNumbers[i]}`
            await this.axios.get(uri).then(response => {
              this.addOns[i] = response.data
            })
          }
        } else {
          let uri = `http://${process.env.HOST_NAME}:8081/buyer/bidderNumber/${this.addOns[0]}`
            await this.axios.get(uri).then(response => {
              this.addOns[0] = response.data
          })
        }
      }, */
      parseBidderNumber() {
        /* if (this.bidderNumber.length > 1) {
          let array = this.bidderNumber.split("-")
          for (let i = 0; i < array.length; i++) {
            // console.log(this.bidderNumbers)
            // this.bidderNumbers[i] = array[i]
            // console.log(typeof array[i])
            // this.bidderNumbers[i] = parseInt(array[i])
            // console.log(this.bidderNumbers[i])
          }
        } else { */
          this.bidderNumbers = parseInt(this.bidderNumber)
        // }
      },
      ...mapActions(['setSaleNumber'])
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
