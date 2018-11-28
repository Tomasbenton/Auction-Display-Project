<template>
  <div id="exhibitor">
    <slot v-if="exhibitors" :exhibitors="exhibitors"></slot>
  </div>
</template>

<script>
export default {
  name: 'Exhibitor',
  data() {
    return {
      exhibitors: []
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
        this.$emit('exhibitorsLength', length)
      })
    }
  }
}
</script>
