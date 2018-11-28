<template>
    <div id="exhibitor">
      <section class="exhibitor_info">
        <h1 class="exhibitor_name">{{ exhibitors[index].fullName }}</h1>
        <h2>Tag Number: {{ exhibitors[index].tag }} <em>{{ exhibitors[index].departmentName}}</em></h2>
      </section>
      <div class="frame"><img :src="getImgUrl(exhibitors[index].pictureName)" alt="Exhibitor-Picture" class="image"></div>
    </div>
</template>

<script>
  export default {
    name: 'Exhibitor',
    data() {
      return {
        exhibitors: [],
        index: 0
      }
    },

    created: function() {
      this.fetchExhibitors()
    },

    methods: {
      fetchExhibitors() {
        let uri = 'http://localhost:8081/exhibitor'
        // let uri = 'http://192.168.21.105:8081/exhibitor'
        this.axios.get(uri).then(response => {
          this.exhibitors = response.data
        })
      },

      getImgUrl: function(pic) {
        return require('../assets/' + pic)
      }
    }
  }
</script>
