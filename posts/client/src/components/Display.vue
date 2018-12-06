<template>
    <div id="display">
      <section class="currentSale" v-if="index !== previousIndex">
        <h1>Current Sale:</h1>
        <h2>Name: {{ exhibitors[this.index].fullName }}</h2>
        <h2>Species: {{ exhibitors[this.index].species }} </h2>
        <h2>Weight: {{ exhibitors[this.index].checkInWeight }}</h2>
        <h2>Club Name: {{ exhibitors[this.index].clubName }}</h2>
      </section>
      <section class="previousSale" v-if="transactions.length >= 2">
        <h1>Previous Sale</h1>
        <h2>Name: {{ exhibitors[this.previousIndex].fullName }}</h2>
        <h2>Species: {{ exhibitors[this.previousIndex].species }} </h2>
        <h2>Weight: {{ exhibitors[this.previousIndex].checkInWeight }}</h2>
        <h2>Club Name: {{ exhibitors[this.previousIndex].clubName }}</h2>
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
        index: 0,
        previousIndex: 0,
        saleNumber: 0
      }
    },
    created: function() {
      this.fetchSaleNumber()
      this.fetchExhibitors()
      this.fetchTransactions()
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
        })
        this.previousIndex = this.transactions.length
        alert(this.previousIndex)
      }
    }
  }
</script>
