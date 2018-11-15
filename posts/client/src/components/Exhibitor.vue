<template>
    <div>
      <header class="left small_pad">
        <h1>{{ exhibitors[index].firstName }} {{ exhibitors[index].lastName }}</h1><br>
        <h2>Tag Number: {{ exhibitors[index].tagNum }} <em>{{ exhibitors[index].species }}</em></h2>
      </header>
      <main class="left column">
        <div class="frame"><img :src="getImgUrl(exhibitors[index].picture)" alt="Exhibitor-Picture" class="image"></div>
      </main>
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
      this.fetchExhibitors();
    },

    methods: {
      fetchExhibitors() {
        let uri = 'http://localhost:8081/exhibitor'
        this.axios.get(uri).then(response => {
          this.exhibitors = response.data
        })
      },

      getImgUrl: function(pic) {
        return require('../assets/' + pic)
      },
    }
  }
</script>
