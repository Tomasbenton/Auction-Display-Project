<template>
  <div>
    <display v-on:length="setIndices" :i="index"></display>
    
  </div>
</template>

<script>
import Display from './Display.vue'
import { mapState, mapActions } from 'vuex'
import { localStorageMixin } from '../store/local-storage-mixin'

export default{
  props: ['i'],
  components: {
    'display': Display
  },
  mixins: [localStorageMixin],
  computed: {
    ...mapState({
      index: state => state.index
    })
  },
  methods: {
    setIndices(e) {
      this.setIndex(this.ls_getIndex())
    },
    handleIndex() {
      this.setIndex(this.ls_getIndex())
    },
    ...mapActions(['setIndex'])
  },
  mounted() {
    this.ls_attachListener(this.handleIndex)
  }
}  
</script>
