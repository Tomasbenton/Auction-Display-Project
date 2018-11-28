<template>
    <div id="display">
      <exhibitors v-on:exhibitorsLength="setLength">
        <div slot-scope="{ exhibitors }">
          <h1>{{ exhibitors[i].firstName }} {{ exhibitors[i].lastName }}</h1>
          <h2>Tag Number: {{ exhibitors[i].tagNum }}</h2>
          <h2>Species: {{ exhibitors[i].species }}</h2>
          <img :src="getImgUrl(exhibitors[i].picture)" alt="" class="image">
        </div>
      </exhibitors>
    </div>
</template>

<style>
  #display{ 
    width: 100%;
  }
  .image{
    width: 100%;
  }
</style>

<script>
import Exhibitor from './Exhibitor.vue'
export default {
  components: {
    'exhibitors': Exhibitor
  },
  props: ['i'],
  data: () => ({
    exhibitorsLength: null
  }),
  methods: {
    setLength(e) {
      this.exhibitorsLength = e
      this.$emit('finalLength', this.exhibitorsLength)
    },
    getImgUrl: function(pic) {
      return require('../assets/' + pic)
    }
  },
  computed: {
    index () {
      return this.$store.state.index
    }
  }
}
</script>
