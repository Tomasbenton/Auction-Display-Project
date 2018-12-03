<template>
  <div id="editBuyer">
    <h1>Edit Buyer</h1>
      <div class=form>
        <input v-validate="'required|numeric'" type=text name=bidderNumber placeholder="Bidder Number" v-model=bidderNumber>
        <label class="errorLabel" for="bidderNumber" >{{ errors.first('bidderNumber') }}</label>
        <input v-validate="'required'" type=text name=name placeholder="Name" v-model=name>
        <label class="errorLabel" for="name" >{{ errors.first('name') }}</label>
        <input v-validate="'required|alpha_spaces'" type=text name=contactName placeholder="Contact Name" v-model=contactName>
        <label class="errorLabel" for="contactName" >{{ errors.first('contactName') }}</label>
        <input v-validate="{ required:true, regex:/^(?:\(\d{3}\)|\d{3}-)\d{3}-\d{4}$/ }" type=text name=phone placeholder="Phone (555-555-5555)" v-model=phone>
        <label class="errorLabel" for="phone" >{{ errors.first('phone') }}</label>
        <input v-validate="'email'" data-vv-as="email" type=text name=email placeholder="Email" v-model=email>
        <label class="errorLabel" for="email" >{{ errors.first('email') }}</label>
        <input v-validate="''" type=text name=logoFilename placeholder="Logo Filename" v-model=logoFilename>
        <label class="errorLabel" for="logoFilename" >{{ errors.first('logoFilename') }}</label>
        <button class="app_post_btn" @click="validate">Update</button>
        <router-link v-bind:to="{ name: 'Manage' }">
          <button>Return to Manage Data</button>
        </router-link>
      </div>
  </div>
</template>

<script>
export default {
  name: 'EditBuyer',
  data () {
    return {
      bidderNumber: '',
      name: '',
      contactName: '',
      phone: '',
      email: '',
      logoFilename: ''
    }
  },
  mounted () {
    this.getBuyer()
  },
  methods: {
    async getBuyer () {
      // let uri = 'http://localhost:8081/buyer/' + this.$route.params.id
      let uri = `http://${process.env.HOST_NAME}:8081/buyer/` + this.$route.params.id
      await this.axios.get(uri).then(response => {
      this.bidderNumber = response.bidderNumber
      this.name = response.name
      this.contactName = response.contactName
      this.phone = response.phone
      this.email = response.email
      this.logoFilename = response.logoFilename
      })
    },
    validate () {
      this.$validator.validateAll()
      if (!this.errors.any()) {
        this.updatePost()
      }
    },
    async updatePost () {
      let updatedBuyer = {
        id: this.$route.params.id,
        bidderNumber: this.bidderNumber,
        name: this.name,
        contactName: this.contactName,
        phone: this.phone,
        email: this.email,
        logoFilename: this.logoFilename
      }
      // let uri = 'http://localhost:8081/buyer/' + this.$route.params.id
      let uri = `http://${process.env.HOST_NAME}:8081/buyer/` + this.$route.params.id
      await this.axios.put(uri, updatedBuyer).then((response) => {
        console.log(response)
      })
      this.$router.push({ name: 'Manage' })
    }
  }
}
</script>

<style scoped>
  #editBuyer{
    width: 450px;
    margin: 0 auto;
    padding-bottom: 50px;
  }

  input{
    height: 50px;
    border: 1px solid #f1f1f1;
  }

  button{
    width: 200px;
    height: 40px;
    border-radius: 0px;
  }

  .errorLabel{
    font-size: 12px;
    color: #ff0000;
  }
</style>
