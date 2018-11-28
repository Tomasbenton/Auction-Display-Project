<template>
  <div id="control">
    <div class="displays">
      <div class="other_display"><display v-on:finalLength="setIndexLimit" :i="prevIndex"></display></div>
      <div class="main_display"><display v-on:finalLength="setIndexLimit" :i="$store.state.index"></display></div>
      <div class="other_display"><display v-on:finalLength="setIndexLimit" :i="nextIndex"></display></div>
    </div>
    <div class="controls"><button v-on:click="previous">Previous</button>
    <button v-on:click="next">Next</button></div>
  </div>
</template>

<style>
  #control{
    width: 100%;
    height: 100%;
  }

  .displays{
    float: left;
    overflow: hidden;
    height: 80%;
  }

  .main_display{
    width: 50%;
    float: left;
  }

  .other_display{
    width: 25%;
    float: left;
  }

  button{
    width: 100px;
    height: 40px;
  }

  button{ background-color: #339966; }

  h1, h2{ color: #339966; }
  button{ color: #ffffff; }

  h1, h2{ font-family: 'Open Sans', Arial, sans-serif; }

  button{ border: none; }

  .controls{
    display: block;
  }
</style>

<script>
import Display from './Display.vue'
export default{
  components: {
    'display': Display
  },
  data() {
    return {
      prevIndex: 0,
      nextIndex: 0,
      indexLimit: 0
    }
  },
  created: function() {
    this.nextIndex = this.$store.state.index + 1
  },
  methods: {
    previous: function() {
      if (this.prevIndex === 0) this.prevIndex = this.indexLimit - 1
      else this.prevIndex--
      if (this.$store.state.index === 0) this.$store.state.index = this.indexLimit - 1
      else this.$store.commit('decrement')
      if (this.nextIndex === 0) this.nextIndex = this.indexLimit - 1
      else this.nextIndex--
      this.$store.commit('setIndex', $this)
    },
    next: function() {
      if ((this.prevIndex + 1) === this.indexLimit) this.prevIndex = 0
      else this.prevIndex++
      if ((this.$store.state.index + 1) === this.indexLimit) this.$store.state.index = 0
      else this.$store.commit('increment')
      if ((this.nextIndex + 1) === this.indexLimit) this.nextIndex = 0
      else this.nextIndex++


    },
    setIndexLimit(e) {
      this.indexLimit = e
      this.prevIndex = this.indexLimit - 1
    }
  }
}  
</script>
