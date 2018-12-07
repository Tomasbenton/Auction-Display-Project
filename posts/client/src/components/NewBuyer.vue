<template>
  <div id="newBuyer">
    <h1>Add Buyer</h1>
      <div class=form>
        <label class="errorLabel" for="bidderNumber" >{{ errors.first('bidderNumber') }}</label>
        <input v-validate="'required|numeric'" type=text name=bidderNumber placeholder="Bidder Number" v-model=bidderNumber>
        <label class="errorLabel" for="name" >{{ errors.first('name') }}</label>
        <input v-validate="'required'" type=text name=name placeholder="Name" v-model=name>
        <label class="errorLabel" for="contactName" >{{ errors.first('contactName') }}</label>
        <input v-validate="'required|alpha_spaces'" type=text name=contactName placeholder="Contact Name" v-model=contactName>
        <label class="errorLabel" for="phone" >{{ errors.first('phone') }}</label>
        <input v-validate="{ required:true, regex:/^(?:\(\d{3}\)|\d{3}-)\d{3}-\d{4}$/ }" type=text name=phone placeholder="Phone (555-555-5555)" v-model=phone>
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
export default {
  name: 'NewBuyer',
  data () {
    return {
      bidderNumber: null,
      name: null,
      contactName: null,
      phone: null,
      email: null,
      logoFileName: null
    }
  },
  methods: {
    validate () {
      this.$validator.validateAll()
      if (!this.errors.any()) {
        this.addBuyer()
        this.resetBuyer()
      }
    },
    async addBuyer () {
      let newBuyer = {
        bidderNumber: this.bidderNumber,
        name: this.name,
        contactName: this.contactName,
        phone: this.phone,
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
