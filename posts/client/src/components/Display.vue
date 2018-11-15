<template>
    <div id="display">
      <exhibitor></exhibitor>
      <buyer></buyer>
    </div>
</template>

<script>
  import Exhibitor from './Exhibitor.vue';
  import Buyer from './Buyer.vue';

  export default {
    components: {
      'exhibitor': Exhibitor,
      'buyer': Buyer
    }
  }
</script>
