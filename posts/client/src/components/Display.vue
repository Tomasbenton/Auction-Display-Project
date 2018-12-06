<template>
    <div id="display">
      <section class="currentSale" v-if="(index !== previousIndex) && (this.exhibitors.length)">
        <h1>Current Sale:</h1>
        <h2>Name: {{ exhibitors[this.index].fullName }}</h2>
        <h2>Species: {{ exhibitors[this.index].species }} </h2>
        <h2>Weight: {{ exhibitors[this.index].checkInWeight }}</h2>
        <h2>Club Name: {{ exhibitors[this.index].clubName }}</h2>
      </section>
        <section class="currentSale" v-else>
        <h1>Current Sale:</h1>
        <h2>Please wait for the next sale</h2>
      </section>
      <section class="previousSale" v-if="transactions.length >= 1">
        <h1>Previous Sale</h1>
        <h2>Name: {{ exhibitors[this.previousIndex].fullName }}</h2>
        <h2>Species: {{ exhibitors[this.previousIndex].species }} </h2>
        <h2>Weight: {{ exhibitors[this.previousIndex].checkInWeight }}</h2>
        <h2>Club Name: {{ exhibitors[this.previousIndex].clubName }}</h2>
        <div class="buyerInfo">
          <h2>Buyer: {{ buyers[buyerIndex].name }}</h2>
          <h2>Purchase Amount: {{ transactions[previousIndex].purchaseAmount }}</h2>
        </div>
      </section>
      <section class="previousSale" v-else>
        <h1>Previous Sale</h1>
        <h2>There are no previous sales</h2>
      </section>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        users: [],
        exhibitors: [],
        transactions: [],
        buyers: [],
        index: 0,
        previousIndex: null,
        buyerIndex: 0,
        saleNumber: 0,
        bidderNumber: 0
      }
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
            if (this.users[i].username === "Admin") this.saleNumber = this.users[i].saleNumber
          }
        })
      },
      async fetchExhibitors() {
        let url = `http://${process.env.HOST_NAME}:8081/exhibitor`
        await this.axios.get(url).then(response => {
          this.exhibitors = response.data
        })
        for (let i = 0; i < this.exhibitors.length; i++) {
          if (this.exhibitors[i].saleNumber === this.saleNumber) this.index = i
        }
      },
      async fetchTransactions() {
        // retrieves the latest transaction
        let url = `http://${process.env.HOST_NAME}:8081/transaction`
        await this.axios.get(url).then(response => {
          this.transactions = response.data
          for (let i = 0; i < this.transactions.length; i++) {
            if (this.transactions[i].purchaseType === "Buyer") {
              this.previousIndex = i
              this.bidderNumber = this.transactions[i].bidderNumber
            }
          }
        })
      },
      async fetchBuyers() {
        let url = `http://${process.env.HOST_NAME}:8081/buyer`
        await this.axios.get(url).then(response => {
          this.buyers = response.data
          for (let i = 0; i < this.buyers.length; i++) {
            if (this.buyers[i].bidderNumber === this.bidderNumber) this.buyerIndex = i
          }
        })
      }
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
