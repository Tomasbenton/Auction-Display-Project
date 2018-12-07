<template>
    <div id="display">
      <!-- <section class="currentSale" v-if="(saleNumber !== previousSaleNumber) && exhibitors.length"> -->
        <section class="currentSale">
        <h1>Current Sale:</h1>
        <h2>Name: {{ exhibitor.fullName }}</h2>
        <h2>Species: {{ exhibitor.species }} </h2>
        <h2>Weight: {{ exhibitor.checkInWeight }}</h2>
        <h2>Club Name: {{ exhibitor.clubName }}</h2>
      </section>
        <!-- <section class="currentSale" v-else>
        <h1>Current Sale:</h1>
        <h2>Please wait for the next sale</h2>
      </section> -->
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
      </section>
      <section class="previousSale" v-else>
        <h1>Previous Sale</h1>
        <h2>There are no previous sales</h2>
      </section> -->
    </div>
</template>

<script>
  export default {
    data() {
      return {
        exhibitor: {checkInWeight: "", clubName: "", fullName: "", species: ""},
        buyer: null
      }
    },
    created: function() {
      this.getExhibitorBySaleNum()
    },
    methods: {
      async getExhibitorBySaleNum () {
        let uri = `http://${process.env.HOST_NAME}:8081/exhibitor/saleNumber/${this.$route.params.saleNumber}`
        await this.axios.get(uri).then(response => {
          if (response.data == null) {
            this.exhibitor.fullName = ""
            this.exhibitor.species = ""
            this.exhibitor.checkInWeight = ""
            this.exhibitor.clubName = ""
          }
          else {
            this.exhibitor = response.data
          }
        })
      },
      async getBuyerByBidderNum () {
        let uri = `http://${process.env.HOST_NAME}:8081/buyer/bidderNumber/${this.$route.params.bidderNumber}`
        await this.axios.get(uri).then(response => {
          if (response.data == null) {
            // this.buyerName = `Buyer with bidder number ${this.bidderNumber} does not exist.` 
            console.log("Error!!!")
          }
          else {
            this.buyer = response.data
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
