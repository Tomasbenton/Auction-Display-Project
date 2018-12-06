<template>
    <div id="display">
      <section class="currentSale">
        <h1>Current Sale</h1>
      </section>
      <section class="previousSale">
        <h1>Previous Sale</h1>
      </section>
    </div>
</template>

<script>
  export default {
    created: function() {
      this.fetchTransactions()
    },
    methods: {
      fetchTransactions() {
        alert("hey")
      }
    }
  }
</script>
