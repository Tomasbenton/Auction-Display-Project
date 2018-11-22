<template>
    <div id="display">
      <exhibitors v-on:exhibitorsLen="setLength">
        from display component {{ this.exhibitorsLen }}
      </exhibitors>
      <exhibitors>
        <p slot-scope="{ exhibitors }">{{ exhibitors[i].firstName }}</p>
      </exhibitors>
      <exhibitors>
        <p slot-scope="{ exhibitors }">{{ exhibitors[i].lastName }}</p>
      </exhibitors>
      <exhibitors>
        <p slot-scope="{ exhibitors }">{{ exhibitors[i].tagNum }}</p>
      </exhibitors>
      <exhibitors>
        <p slot-scope="{ exhibitors }">{{ exhibitors[i].species }}</p>
      </exhibitors>
      <exhibitors>
        <img slot-scope="{ exhibitors }" :src="getImgUrl(exhibitors[i].picture)" alt="exhibitors[i].firstName with a exhibitors[i].species" class="image">
      </exhibitors>
    </div>
</template>

<script>
import Exhibitor from './Exhibitor.vue'
export default {
  components: {
    'exhibitors': Exhibitor
  },
  props: ['i'],
  data: () => ({
    exhibitorsLen: null
  }),
  methods: {
    setLength(e) {
      this.exhibitorsLen = e
      this.$emit('finalLength', this.exhibitorsLen)
    },
    getImgUrl: function(pic) {
      return require('../assets/' + pic)
    }
  }
}
</script>
