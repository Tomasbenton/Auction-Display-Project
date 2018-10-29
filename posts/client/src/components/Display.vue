<template>
    <div id="display">
        <!-- <h1>Display Page</h1> -->
        <div class="row">
            <div class="column">
                <h2>Jane Doe</h2>
                <!-- BROKEN! -->
                <!-- <h2>{{ exhibitor.firstName }}</h2> -->
                <div id="animal">
                    <h3>Goat</h3>
                    <h4>Tag Number: 123456</h4>
                </div>
                <!-- <img src="https://via.placeholder.com/500x450"> -->
                <img src="../assets/Sample_Auction.jpg" alt="Shower" class="responsive">
                <table class="table table-hover">
                    <thead>
                    <tr>
                        <td>ID</td>
                        <td>Sale Num</td>
                        <td>Tag Num</td>
                        <td>First Name</td>
                        <td>Last Name</td>
                        <td>Species</td>
                        <td>Fair Weight</td>
                        <td>Club Name</td>
                    </tr>
                    </thead>
                    <tbody>
                        <tr v-for="exhibitor in exhibitors" :key="exhibitor._id">
                            <td>{{ exhibitor._id }}</td>
                            <td>{{ exhibitor.saleNum }}</td>
                            <td>{{ exhibitor.tagName }}</td>
                            <td>{{ exhibitor.firstName }}</td>
                            <td>{{ exhibitor.lastName }}</td>
                            <td>{{ exhibitor.species }}</td>
                            <td>{{ exhibitor.fairWeight }}</td>
                            <td>{{ exhibitor.clubName }}</td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div class="column">
                <div id="buyer">
                    <h2>Buyer</h2>
                    <img src="../assets/City Market Logo.png" alt="City Market" class="responsive">
                    <h1>$10,000</h1>
                </div>
                <div id="addon">
                    <h2>Addon Buyers</h2>
                    <div class="column">
                        <ul>
                            <li>Simply Mac</li>
                            <li>Chick-fil-A</li>
                            <li>Qdoba</li>
                            <li>Lowe's</li>
                        </ul>
                    </div>
                    <div class="column">
                        <ul>
                            <li>$200</li>
                            <li>$300</li>
                            <li>$100</li>
                            <li>$50</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      exhibitors: []
    }
  },

  created: function() {
    this.fetchItems()
  },

  methods: {
    fetchItems() {
      let uri = 'http://localhost:8081/exhibitor'
      this.axios.get(uri).then(response => {
        this.exhibitors = response.data
      })
    }
  }
}
</script>

<style>
#display {
  font-size: 25px;
}

#buyer h1 {
  font-size: 65px;
}

#addon ul {
  list-style: none;
}

.responsive {
  max-width: 100%;
  height: auto;
}

.column {
  float: left;
  width: 50%;
}

/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
}
</style>
