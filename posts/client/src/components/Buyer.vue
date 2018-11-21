<template>
    <div id="buyer">
      <section>
        <h1>Buyer</h1>
        <h2 class="buyer">{{ buyers[0].businessName }} - ${{ getNumWithCommas(buyers[0].purchaseAmount) }}</h2>
      </section>
      <section class="addons">
        <h2>Addon Buyers</h2>
          <ul>
            <li>Simply Mac <span class="amount">$200</span></li>
            <li>{{buyers[1].businessName}} <span class="amount">${{ getNumWithCommas(buyers[1].purchaseAmount) }}</span></li>
            <li>Qdoba <span class="amount">$100</span></li>
            <li>Lowe's <span class="amount">$50</span></li>
            <li>{{buyers[2].firstName}} {{buyers[2].lastName}} <span class="amount">${{ getNumWithCommas(buyers[2].purchaseAmount) }}</span></li>
          </ul>
      </section>
    </div>
</template>

<script>
  export default {
    name: 'Buyer',
    data() {
      return {
        buyers: [],
        index: 0
      }
    },

    created: function() {
      this.fetchBuyers()
    },

    methods: {
      fetchBuyers() {
        let uri = 'http://localhost:8081/buyer'
        this.axios.get(uri).then(response => {
          this.buyers = response.data
        })
      },

      getNumWithCommas: function (num) {
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
      }
    }
  }
</script>

<style>
  #buyer{
    padding: 0px 50px;
  }
</style>
