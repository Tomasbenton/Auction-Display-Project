<template>
  <div>
    <display :i="$store.state.index"></display>
    
  </div>
</template>

<script>
import Display from './Display.vue'
export default{
  props: ['i'],
  components: {
    'display': Display
  }
}  
</script>
