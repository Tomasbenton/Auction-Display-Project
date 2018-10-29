<template>
    <div id="display">
        <!-- Nice banner up here? Fair logo/name? -->
        <!-- <h1>Display Page</h1> -->
        <div class="row">
            <div class="column">
                <h2>{{ exhibitors[0].firstName }} {{ exhibitors[0].lastName }}</h2>
                <div id="animal">
                    <h3>{{ exhibitors[0].species }}</h3>
                    <h4>Tag Number: {{ exhibitors[0].tagNum }}</h4>
                </div>
                <!-- <img src="https://via.placeholder.com/500x450"> -->
                <img :src="getImgUrl(exhibitors[0].picture)" v-bind:alt="Exhibitor-Picture" class="responsive">
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
    },

    getImgUrl(pic) {
        return require('../assets/'+pic)
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
