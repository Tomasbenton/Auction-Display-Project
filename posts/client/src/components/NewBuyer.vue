<template>
  <div>
    <h1>Add Buyer</h1>
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
          <button class=app_post_btn @click=addBuyer>Add</button>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'NewBuyer',
  data () {
    return {
      entrySaleNumber: null,
      name: null,
      identifier: null,
      contactName: null,
      email: null,
      phone: null,
      address1: null,
      address2: null,
      cityStatePostalZip: null,
      pictureName: null,
      type: null,
      purchaseAmount: null
    }
  },
  methods: {
    async addBuyer () {
      let newBuyer = {
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
      let uri = 'http://localhost:8081/buyer/add'
      this.axios.post(uri, newBuyer).then((response) => {
        console.log(response)
      })
      this.$router.push({ name: 'Manage' })
    }
  }
}
</script>
<style type=text/css>
.form input, .form textarea {
  width: 500px;
  padding: 10px;
  border: 1px solid #e0dede;
  outline: none;
  font-size: 12px;
}
.form div {
  margin: 20px;
}
.app_post_btn {
  padding: 10px 80px;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: bold;
  width: 520px;
  border: none;
}
</style>
