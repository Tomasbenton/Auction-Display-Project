<template>
    <div id="exhibitor">
      <h2>Sorry, this page is still a work in progress.</h2>
      <router-link v-bind:to="{ name: 'Admin' }">
        <button class="topBtn dashboardBtn"><span class="arrow">&#8592;</span> Return to Dashboard</button>
      </router-link>
      <img src='../assets/Under_Construction.gif' alt="Webpage Under Construction" class="construction">
    </div>
</template>

<script>
  // export default {
  //   name: 'Exhibitor',
  //   data() {
  //     return {
  //       exhibitors: [],
  //       index: 0
  //     }
  //   },

  //   created: function() {
  //     this.fetchExhibitors()
  //   },

  //   methods: {
  //     fetchExhibitors() {
  //       // let uri = 'http://localhost:8081/exhibitor'
  //       let uri = `http://${process.env.HOST_NAME}:8081/exhibitor`
  //       this.axios.get(uri).then(response => {
  //         this.exhibitors = response.data
  //       })
  //     },

  //     getImgUrl: function(pic) {
  //       return require('../assets/' + pic)
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
