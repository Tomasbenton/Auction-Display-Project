<template>
    <div id="buyer">
      <h2>Sorry, this page is still a work in progress.</h2>
      <router-link v-bind:to="{ name: 'Admin' }">
        <button class="topBtn dashboardBtn"><span class="arrow">&#8592;</span> Return to Dashboard</button>
      </router-link>
      <img src='../assets/Under_Construction.gif' alt="Webpage Under Construction" class="construction">
    </div>
</template>

<script>
  // export default {
  //   name: 'Buyer',
  //   data() {
  //     return {
  //       buyers: [],
  //       index: 0
  //     }
  //   },

  //   created: function() {
  //     this.fetchBuyers()
  //   },

  //   methods: {
  //     fetchBuyers() {
  //       // let uri = 'http://localhost:8081/buyer'
  //       let uri = `http://${process.env.HOST_NAME}:8081/buyer`
  //       this.axios.get(uri).then(response => {
  //         this.buyers = response.data
  //       })
  //     },

  //     getNumWithCommas: function (num) {
  //       return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  //     }
  //   }
  // }
</script>

<style scoped>
h2 {
  text-align: center;
}
.construction {
    display: block;
    margin: auto;
    width: 50%;
    padding-top: 40px;
}

.topBtn {
  width: 300px;
  height: 60px;
  padding-bottom: 10px;
  display: block;
  margin: auto;
}

button:hover{
  background-color: #f1f1f1;
  color: #339966;
}
</style>
