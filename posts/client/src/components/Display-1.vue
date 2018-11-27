<template>
  <div>
    <display v-on:indexPosition="setIndex" :i="index"></display>
  </div>
</template>

<script>
import Display from './Display.vue'
import Control from './Control.vue'
export default{
  components: {
    'display': Display
  },
  props: ['i'],
  data() {
    return {
      index: 1
    }
  },
  methods: {
    setIndex(e) {
      this.index = e
      alert(this.index)
    }
  }
}  
</script>
