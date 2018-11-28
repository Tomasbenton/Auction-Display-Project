<template>
  <div id="control">
    <div class="displays">
      <div class="other_display"><display v-on:length="setIndices" :i="prevIndex"></display></div>
      <div class="main_display"><display v-on:length="setIndices" :i="index"></display></div>
      <div class="other_display"><display v-on:length="setIndices" :i="nextIndex"></display></div>
    </div>
    <div class="controls"><button @click="previous">Previous</button>
    <button @click="next">Next</button></div>
    {{ index }}
  </div>
</template>

<script>
import Display from './Display.vue'
import { mapState, mapActions } from 'vuex'
import { localStorageMixin } from '../store/local-storage-mixin'

export default{
  components: {
    'display': Display
  },
  mixins: [localStorageMixin],
  data () {
    return {
      prevIndex: 0,
      nextIndex: 0,
      indexLimit: 0
    }
  },
  computed: {
    ...mapState({
      index: state => state.index
    })
  },
  methods: {
    previous: function() {      
      if (this.prevIndex === 0) this.prevIndex = this.indexLimit - 1
      else this.prevIndex--
      if (this.index === 0) this.setIndex(this.indexLimit - 1)
      else this.decrementIndex()
      if (this.nextIndex === 0) this.nextIndex = this.indexLimit - 1
      else this.nextIndex--
      this.ls_setIndex(this.index)
    },
    next: function() {
      if ((this.prevIndex + 1) === this.indexLimit) this.prevIndex = 0
      else this.prevIndex++
      if ((this.index + 1) === this.indexLimit) this.setIndex(0)
      else this.incrementIndex()
      if ((this.nextIndex + 1) === this.indexLimit) this.nextIndex = 0
      else this.nextIndex++
      this.ls_setIndex(this.index)
    },
    setIndices(e) {
      this.indexLimit = e
      this.setIndex(this.ls_getIndex())
      if (this.index === 0) this.prevIndex = this.indexLimit - 1
      else this.prevIndex = this.index - 1
      if (this.index === (this.indexLimit - 1)) this.nextIndex = 0
      else this.nextIndex = this.index + 1
    },
    handleIndex() {
      this.setIndex(this.ls_getIndex())
    },
    ...mapActions(['setIndex', 'decrementIndex', 'incrementIndex'])
  },
  mounted() {
    this.ls_attachListener(this.handleIndex)
  }
}  
</script>

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
