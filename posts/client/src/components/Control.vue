<template>
  <div id="control">
    <div class="displays">
      <div class="other_display" @click="previous"><display v-on:length="setIndices" :i="prevIndex"></display></div>
      <div class="main_display"><display v-on:length="setIndices" :i="index"></display></div>
      <div class="other_display" @click="next"><display v-on:length="setIndices" :i="nextIndex"></display></div>
    </div>
    <div class="controls"><button class="prev_btn" @click="previous">Previous</button>
    <button class="next_btn" @click="next">Next</button></div>
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
    },
    handleIndex() {
      this.setIndex(this.ls_getIndex())
    },
    ...mapActions(['setIndex', 'decrementIndex', 'incrementIndex'])
  },
  mounted() {
    this.ls_attachListener(this.handleIndex)
    this.setIndex(this.ls_getIndex())
    if (this.index === 0) {
      this.prevIndex = this.indexLimit - 1
      this.nextIndex = this.index + 1
    }
    if (this.index === (this.indexLimit - 1)) {
      this.prevIndex = this.index - 1
      this.nextIndex = 0
    }
    if (this.prevIndex === this.nextIndex) {
      this.prevIndex = this.index - 1
      this.nextIndex = this.index + 1
    }
  }
}  
</script>

<style>
  #control{
    width: 100vw;
    height: 100vh;
    overflow: hidden;
  }

  .other_display{
    width: 25vw;
    float: left;
  }

  .main_display{
    width: 50vw;
    float: left;
  }

  .controls{
    position: fixed;
    bottom: 0px;
    width: 100vw;
    text-align: center;
    min-width: 450px;
  }

  button{
    background-color: #339966;
    color: #ffffff;
    padding: 25px;
    min-width: 150px;
    border: none;
  }

  button:hover{
    background-color: #ffffff;
    color: #339966;
  }

  .prev_btn{
    position: absolute;
    left: 0px;
  }

  .next_btn{
    float: right;
  }

  .other_display #display{
    width: 25vw;
    float: left; 
    opacity: 0.5;
    margin-top: 100px;
  }

  .other_display #display:hover{
    opacity: 1;
    cursor: pointer;
  }

  .other_display #display .image{
    width: 25vw;
  }

  /*#control{
    width: 100vw;
    height: 100vh;
  }

  .displays{
    float: left;
    overflow: hidden;
    height: 80vh;
  }

  .main_display{
    width: 50%;
    float: left;
    overflow: hidden;
  }

  .other_display{
    height: 50vh;
    width: 25%;
    float: left;
    opacity: 0.7;
    z-index: -1;
    position: relative;
  }

  .other_display:hover{
    opacity: 1;
  }

  button{
    width: 200px;
    height: 40px;
    margin: 0px 50px;
  }

  button{ background-color: #339966; }

  h1, h2{ color: #339966; }
  button{ color: #ffffff; }

  h1, h2{ font-family: 'Open Sans', Arial, sans-serif; }

  button{ border: none; }

  .controls{
    display: block;
    width: 100vw;
    text-align: center;
  }*/
</style>
