<template>
    <div id="display">
      <exhibitors class="main_display" v-on:exhibitorsLength="setLength">
        <div slot-scope="{ exhibitors }">
          <img :src="getImgUrl(exhibitors[i].picture)" alt="" class="image">
          <div class="text">
            <h1>{{ exhibitors[i].firstName }} {{ exhibitors[i].lastName }}</h1>
            <h2>Tag Number: {{ exhibitors[i].tagNum }}</h2>
            <h2>Species: {{ exhibitors[i].species }}</h2>
          </div>
        </div>
      </exhibitors>
    </div>
</template>

<script>
  import Exhibitor from './Exhibitor.vue'
  import Buyer from './Buyer.vue'

  export default {
    components: {
      'exhibitor': Exhibitor,
      'buyer': Buyer
    }
  }
</script>

<style scoped>
  .image{
    width: 100%;
    max-width: 1000px;
  }

  .text{
    font-size: 10px;
    padding: 20px;
    text-overflow: wrap;
  }

  h1{

  }
</style>
