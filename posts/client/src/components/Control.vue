<template>
  <div id="control">
    <display v-on:finalLength="setIndexLimit" :i="index">
      
    </display>
    <button v-on:click="previous">Previous</button>
    <button v-on:click="next">Next</button>
  </div>
</template>

<script>
import Display from './Display.vue'
export default{
  components: {
    'display': Display
  },
  data() {
    return {
      index: 0,
      indexLimit: 0
    }
  },
  methods: {
    previous: function() {
      if (this.index === 0) this.index = this.indexLimit - 1
      else this.index--
    },
    next: function() {
      if (this.indexLimit === this.index + 1) this.index = 0
      else this.index++
    },
    setIndexLimit(e) {
      this.indexLimit = e
    }
  }
}  
</script>

<!--<template>
    <div id="control">
      <display v-on:finalLength="setIndexLimit" :i="index"></display>
      <button v-on:click="previous">Previous</button>
      <button v-on:click="next">Next</button>
    </div>
</template>

<script>
import Display from './Display.vue'
export default{
  components: {
    'display': Display
  },
  data: () => ({
    index: 0,
    indexLimit: 0

  }),
  methods: {
    previous: function() {
      // Note that '%' operator in JS is remainder and NOT modulo
      // this.index = ++this.index % this.exhibitors.length
      if (this.index === 0) this.index = this.indexLimit - 1
      else this.index--
    },
    next: function() {
      // Note that '%' operator in JS is remainder and NOT modulo
      if (this.indexLimit === this.index + 1) this.index = 0
      else this.index++
    },
    setIndexLimit(e) {
      this.indexLimit = e
    },
  }
}
</script>
-->
