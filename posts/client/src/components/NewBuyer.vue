<template>
  <div id="newBuyer">
    <h1>Add Buyer</h1>
      <div class=form>
        <label v-if="duplicateBidderNumber" class="errorLabel" for="bidderNumber">Error: Duplicate Bidder Number. Bidder Number must be unique.</label>
        <label v-else class="errorLabel" for="bidderNumber" >{{ errors.first('bidderNumber') }}</label>
        <input v-validate="'required|numeric'" type=text name=bidderNumber placeholder="Bidder Number" v-model=bidderNumber>
        <label class="errorLabel" for="name" >{{ errors.first('name') }}</label>
        <input v-validate="'required'" type=text name=name placeholder="Name" v-model=name>
        <label class="errorLabel" for="contactName" >{{ errors.first('contactName') }}</label>
        <input v-validate="'required|alpha_spaces'" type=text name=contactName placeholder="Contact Name" v-model=contactName>
        <label class="errorLabel" for="phone" >{{ errors.first('phone') }}</label>
        <cleave v-validate="'required|digits:10'" v-model="phone" :options="options" name="phone" placeholder="Phone (555-555-5555)"></cleave>
        <label class="errorLabel" for="email" >{{ errors.first('email') }}</label>
        <input v-validate="'email'" data-vv-as="email" type=text name=email placeholder="Email" v-model=email>
        <label class="errorLabel" for="logoFileName" >{{ errors.first('logoFileName') }}</label>
        <input v-validate="''" type=text name=logoFileName placeholder="Logo Filename" v-model=logoFileName>
        <button class=app_post_btn @click=validate>Add</button>
        <router-link v-bind:to="{ name: 'Manage', params: {view: false} }">
          <button>Return to Manage</button>
        </router-link>
      </div>
  </div>
</template>

<script>
import Cleave from 'vue-cleave-component'
import CleavePhone from 'cleave.js/dist/addons/cleave-phone.i18n'
export default {
  name: 'NewBuyer',
  data () {
    return {
      bidderNumber: null,
      name: null,
      contactName: null,
      phone: null,
      options: {
        phone: true,
        delimiter: '-',
        phoneRegionCode: 'US'
      },
      email: null,
      logoFileName: null,
      buyers: []
    }
  },

  components: {
    Cleave,
    CleavePhone
  },

  created: function() {
    this.fetchBuyers()
  },

  computed: {
    duplicateBidderNumber () {
      return this.buyers.some(buyer => {
        if (this.bidderNumber == buyer.bidderNumber) return true
      })
    }
  },

  methods: {
    fetchBuyers() {
      let uri = `http://${process.env.HOST_NAME}:8081/buyer`
      this.axios.get(uri).then(response => {
        this.buyers = response.data
      })
    },
    validate () {
      this.$validator.validateAll()
      if (!this.errors.any() && !this.duplicateBidderNumber) {
        this.addBuyer()
        this.resetBuyer()
      }
    },
    async addBuyer () {
      let newBuyer = {
        bidderNumber: this.bidderNumber,
        name: this.name,
        contactName: this.contactName,
        phone: this.phone.replace(/(\d{3})(\d{3})(\d{3})/, "$1-$2-$3"),
        email: this.email,
        logoFileName: this.logoFileName
      }
      let uri = `http://${process.env.HOST_NAME}:8081/buyer/add`
      this.axios.post(uri, newBuyer).then((response) => {
        console.log(response)
      })
    },
    resetBuyer () {
      this.bidderNumber++
      this.name = ''
      this.contactName = ''
      this.phone = ''
      this.email = ''
      this.logoFileName = ''
    },
    addDashes()
    {
      this.phone.value = this.phone.value.replace(/\D/g, '')
      this.phone.value = this.phone.value.slice(0, 3) + "-" + this.phone.value.slice(3, 6) + "-" + this.phone.value.slice(6, 15)
    }
  }
}
</script>
<style scoped>
  #newBuyer{
    width: 400px;
    margin: 0 auto;
  }

  input{
    border: 1px solid #f1f1f1;
    height: 50px;
  }

  button{
    width: 150px;
    height: 40px;
    border-radius: 0px;
  }

  .errorLabel{
    font-size: 12px;
    color: #ff0000;
  }
</style>
