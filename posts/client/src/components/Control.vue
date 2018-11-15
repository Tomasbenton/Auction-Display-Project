<template>
    <div id="control">
        <button v-on:click="incrementLeft">Left</button>
        <button v-on:click="incrementRight">Right</button>
        {{ index }}
    </div>

</template>

<script>
  import Exhibitor from './Exhibitor.vue';
  export default{
    props: ['exhibitors'],
    data() {
      return {
        index: 0
      }
    },
    methods: {
      incrementRight: function() {
        // Note that '%' operator in JS is remainder and NOT modulo
        this.index = ++this.index % this.exhibitors.length
        //this.index += 1
      },

      incrementLeft: function() {
        // Note that '%' operator in JS is remainder and NOT modulo
        if (this.index === 0) {
          this.index = this.exhibitors.length - 1
        } else {
          this.index = --this.index % this.exhibitors.length
        }
      }
    }
  }
</script>
