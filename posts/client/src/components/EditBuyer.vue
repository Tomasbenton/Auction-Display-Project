<template>
  <div class="buyers">
    <h1>Edit Buyer</h1>
    <div class=form>
    <div>
      <input type=text name=entrySaleNumber placeholder="Entry Sale Number" v-model=entrySaleNumber>
    </div>
    <div>
      <input type=text name=name placeholder="Name" v-model=name>
    </div>
    <div>
      <input type=text name=identifier placeholder="Identifier" v-model=identifier>
    </div>
    <div>
      <input type=text name=contactName placeholder="Contact Name" v-model=contactName>
    </div>
    <div>
      <input type=text name=email placeholder="Email" v-model=email>
    </div>
    <div>
      <input type=text name=phone placeholder="Phone" v-model=phone>
    </div>
    <div>
      <input type=text name=address1 placeholder="Address 1" v-model=address1>
    </div>
    <div>
      <input type=text name=address2 placeholder="Address 2" v-model=address2>
    </div>
    <div>
      <input type=text name=cityStatePostalZip placeholder="City, State PostalZip" v-model=cityStatePostalZip>
    </div>
    <div>
      <input type=text name=pictureName placeholder="Picture Name" v-model=pictureName>
    </div>
    <div>
      <input type=text name=type placeholder="Type" v-model=type>
    </div>
    <div>
      <input type=text name=purchaseAmount placeholder="Purchase Amount" v-model=purchaseAmount>
    </div>
      <div>
          <button class="app_post_btn" @click="updatePost">Update</button>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'EditBuyer',
  data () {
    return {
      entrySaleNumber: '',
      name: '',
      identifier: '',
      contactName: '',
      email: '',
      phone: '',
      address1: '',
      address2: '',
      cityStatePostalZip: '',
      pictureName: '',
      type: '',
      purchaseAmount: ''
    }
  },
  mounted () {
    this.getBuyer()
  },
  methods: {
    async getBuyer () {
      let uri = 'http://localhost:8081/buyer/' + this.$route.params.id
      await this.axios.get(uri).then(response => {
      this.entrySaleNumber = response.entrySaleNumber
      this.name = response.name
      this.identifier = response.identifier
      this.contactName = response.contactName
      this.email = response.email
      this.phone = response.phone
      this.address1 = response.address1
      this.address2 = response.address2
      this.cityStatePostalZip = response.cityStatePostalZip
      this.pictureName = response.pictureName
      this.type = response.type
      this.purchaseAmount = response.purchaseAmount
      })
    },
    async updatePost () {
      let updatedBuyer = {
        id: this.$route.params.id,
        entrySaleNumber: this.entrySaleNumber,
        name: this.name,
        identifier: this.identifier,
        contactName: this.contactName,
        email: this.email,
        phone: this.phone,
        address1: this.address1,
        address2: this.address2,
        cityStatePostalZip: this.cityStatePostalZip,
        pictureName: this.pictureName,
        type: this.type,
        purchaseAmount: this.purchaseAmount
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
</style>
