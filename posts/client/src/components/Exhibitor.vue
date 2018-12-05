<template>
    <div id="exhibitor">
      <img src='../assets/Under_Construction.gif' alt="Webpage Under Construction" class="construction">
    </div>
</template>

<script>
export default {
}
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
.construction {
    display: block;
    margin: auto;
    width: 50%;
}
</style>
