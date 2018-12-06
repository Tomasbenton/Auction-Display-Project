<template>
    <div id="display">
      <section class="currentSale" v-if="(saleNumber !== previousSaleNumber) && exhibitors.length">
        <h1>Current Sale:</h1>
        <h2>Name: {{ exhibitors[index].fullName }}</h2>
        <h2>Species: {{ exhibitors[index].species }} </h2>
        <h2>Weight: {{ exhibitors[index].checkInWeight }}</h2>
        <h2>Club Name: {{ exhibitors[index].clubName }}</h2>
      </section>
        <section class="currentSale" v-else>
        <h1>Current Sale:</h1>
        <h2>Please wait for the next sale</h2>
      </section>
      <section class="previousSale" v-if="exhibitors.length && buyers.length && transactions.length">
        <h1>Previous Sale</h1>
        <h2>Name: {{ exhibitors[previousIndex].fullName }}</h2>
        <h2>Species: {{ exhibitors[previousIndex].species }} </h2>
        <h2>Weight: {{ exhibitors[previousIndex].checkInWeight }}</h2>
        <h2>Club Name: {{ exhibitors[previousIndex].clubName }}</h2>
        <div class="buyerInfo">
          <h2>Buyer: {{ buyers[bidderIndex].name }}</h2>
          <h2>Purchase Amount: ${{ transactions[purchaseIndex].purchaseAmount }}</h2>
        </div>
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
        exhibitors: [],
        transactions: [],
        buyers: []
      }
    },
    computed: {
      ...mapState({
        index: state => state.index,
        previousIndex: state => state.previousIndex,
        bidderIndex: state => state.bidderIndex,
        saleNumber: state => state.saleNumber,
        previousSaleNumber: state => state.previousSaleNumber,
        bidderNumber: state => state.bidderNumber,
        purchaseIndex: state => state.purchaseIndex
      })
    },
    created: function() {
      this.fetchSaleNumber()
      this.fetchExhibitors()
      this.fetchTransactions()
      this.fetchBuyers()
    },
    methods: {
      async fetchSaleNumber() {
        let url = `http://${process.env.HOST_NAME}:8081/user`
        await this.axios.get(url).then(response => {
          this.users = response.data
          for (let i = 0; i < this.users.length; i++) {
            if (this.users[i].username === "Admin") this.setSaleNumber(this.users[i].saleNumber)
          }
        })
      },
      async fetchExhibitors() {
        let url = `http://${process.env.HOST_NAME}:8081/exhibitor`
        await this.axios.get(url).then(response => {
          this.exhibitors = response.data
          for (let i = 0; i < this.exhibitors.length; i++) {
            if (this.exhibitors[i].saleNumber === this.saleNumber) this.setIndex(i)
          }
        })
      },
      async fetchTransactions() {
        // retrieves the latest transaction
        let url = `http://${process.env.HOST_NAME}:8081/transaction`
        await this.axios.get(url).then(response => {
          this.transactions = response.data
          for (let i = 0; i < this.transactions.length; i++) {
            if (this.transactions[i].purchaseType === "Buyer") {
              this.setBidderNumber(this.transactions[i].bidderNumber)
              this.setPreviousSaleNumber(this.transactions[i].saleNumber)
              this.setPurchaseIndex(i)
            }
          }
          for (let j = 0; j < this.exhibitors.length; j++) {
            if (this.exhibitors[j].saleNumber === this.previousSaleNumber) this.setPreviousIndex(j)
          }
        })
      },
      async fetchBuyers() {
        let url = `http://${process.env.HOST_NAME}:8081/buyer`
        await this.axios.get(url).then(response => {
          this.buyers = response.data
          for (let i = 0; i < this.buyers.length; i++) {
            if (this.buyers[i].bidderNumber === this.bidderNumber) this.setBidderIndex(i)
          }
        })
      },
      ...mapActions(['setIndex', 'setPreviousIndex', 'setBidderIndex', 'setSaleNumber', 'setPreviousSaleNumber', 'setBidderNumber', 'setPurchaseIndex'])
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
