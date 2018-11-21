<template>
    <div id="display">
      <exhibitors v-on:exhibitorsLen="setLength">
        {{ i + 1 }}
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
      this.$emit('finalLength', e)
    }
  }
}
</script>
