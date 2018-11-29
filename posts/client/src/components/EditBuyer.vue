<template>
  <div class="buyers">
    <h1>Edit Buyer</h1>
      <div class=form>
        <div>
          <input class="input-field" v-validate="'required|numeric'" type=text name=bidderNumber placeholder="Bidder Number" v-model=bidderNumber>
          <label class="error-label" for="bidderNumber" >{{ errors.first('bidderNumber') }}</label>
        </div>
        <div>
          <input class="input-field" v-validate="'required'" type=text name=name placeholder="Name" v-model=name>
          <label class="error-label" for="name" >{{ errors.first('name') }}</label>
        </div>
        <div>
          <input class="input-field" v-validate="'required|alpha_spaces'" type=text name=contactName placeholder="Contact Name" v-model=contactName>
          <label class="error-label" for="contactName" >{{ errors.first('contactName') }}</label>
        </div>
        <div>
          <input class="input-field" v-validate="{ required:true, regex:/^(?:\(\d{3}\)|\d{3}-)\d{3}-\d{4}$/ }" type=text name=phone placeholder="Phone (555-555-5555)" v-model=phone>
          <label class="error-label" for="phone" >{{ errors.first('phone') }}</label>
        </div>
        <div>
          <input class="input-field" v-validate="'email'" data-vv-as="email" type=text name=email placeholder="Email" v-model=email>
          <label class="error-label" for="email" >{{ errors.first('email') }}</label>
        </div>
        <div>
          <input class="input-field" v-validate="''" type=text name=logoFilename placeholder="Logo Filename" v-model=logoFilename>
          <label class="error-label" for="logoFilename" >{{ errors.first('logoFilename') }}</label>
        </div>
      <div>
          <button class="app_post_btn" @click="validate">Update</button>
        </div>
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
      let uri = 'http://localhost:8081/buyer/' + this.$route.params.id
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
      let uri = 'http://localhost:8081/buyer/' + this.$route.params.id
      await this.axios.put(uri, updatedBuyer).then((response) => {
        console.log(response)
      })
      this.$router.push({ name: 'Manage' })
    }
  }
}
</script>

<style type="text/css">
.form input, .form textarea {
  width: 500px;
  padding: 10px;
}
.form div {
  margin: 20px;
}
.app_post_btn {
  width: 520px;
}
.control-label{
  display: block;
}
.error-label{
  display: block;
  margin-bottom: 20px;
  color: red;
}
.input-field{
  margin-bottom:0;
}
</style>
