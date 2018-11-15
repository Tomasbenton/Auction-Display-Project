<template>
    <div id="buyer">
      <main class="left column big_pad">
        <section class="row">
          <h1>Buyer</h1><br>
          <h2>{{ buyers[0].businessName }} - ${{ getNumWithCommas(buyers[0].purchaseAmount) }}</h2>
        </section>
        <section class=" row">
          <h2>Addon Buyers</h2><br>
            <ul>
              <li>Simply Mac <span class="amount">$200</span></li>
              <li>{{buyers[1].businessName}} <span class="amount">${{ getNumWithCommas(buyers[1].purchaseAmount) }}</span></li>
              <li>Qdoba <span class="amount">$100</span></li>
              <li>Lowe's <span class="amount">$50</span></li>
              <li>{{buyers[2].firstName}} {{buyers[2].lastName}} <span class="amount">${{ getNumWithCommas(buyers[2].purchaseAmount) }}</span></li>
            </ul>
        </section>
      </main>
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
      this.fetchBuyers();
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
