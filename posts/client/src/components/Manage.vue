<template>
  <div class="manage">
    <nav>
      <h1>Manage Data</h1>
      <router-link v-bind:to="{ name: 'Admin' }">
        <button id="dashboard-button">Return to Dashboard</button>
      </router-link>
      <button @click='view = !view'>Toggle View</button>
    </nav>
    <template v-if="view">
      <manageExhibitors></manageExhibitors>
    </template>
    <template v-else>
      <manageBuyers></manageBuyers>
    </template>
  </div>
</template>




<script>
import ManageExhibitors from './ManageExhibitors.vue'
import ManageBuyers from './ManageBuyers.vue'

export default {
  name: 'btn',
  data() {
    return {
      view: true
    }
  },
  methods: {
    toggleDisplayType() {
      this.view = !this.view
    }
  },
  components: {
    'manageExhibitors': ManageExhibitors,
    'manageBuyers': ManageBuyers
  }
}

</script>

<style scoped>
  #manage{
    width: 100%;
    height: 100%;
  }

  nav{
    padding: 10px 20px;
  }

  button{
    width: 200px;
    height: 60px;
    background-color: #f1f1f1;
    color: #339966;
    border: none;
    margin: 2px;
  }

  button:hover{
    background-color: #339966;
    color: #f1f1f1;
  }

  h1{
    line-height: 0%;
  }

  #manageExhibitors, #manageBuyers{
    margin: 0px 25px;
  }

</style>
