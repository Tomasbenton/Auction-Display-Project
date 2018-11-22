<template>
  <div id="exhibitor">
    <slot :exhibitors="exhibitors"></slot>
    <!--
    <section class="exhibitor_info">
      <h1 class="exhibitor_name">{{ exhibitors[index].firstName }} {{ exhibitors[index].lastName }}</h1>
      <h2>Tag Number: {{ exhibitors[index].tagNum }} <em>{{ exhibitors[index].species }}</em></h2>
    </section>
    <div class="frame"><img :src="getImgUrl(exhibitors[index].picture)" alt="Exhibitor-Picture" class="image"></div>-->
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
      this.axios.get(uri).then(response => {
        this.exhibitors = response.data
        let length = this.exhibitors.length
        this.$emit('exhibitorsLen', length)
      })
    }
  }
}
</script>
