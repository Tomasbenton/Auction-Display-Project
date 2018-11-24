<template>
  <div>
    <h1>Add Exhibitor</h1>
      <div class=form>
        <div>
          <input type=text name=SaleNum placeholder=SALE_NUMBER v-model=saleNum>
        </div>
        <div>
          <input type=text name=tagNum placeholder=TAG_NUMBER v-model=tagNum>
        </div>
        <div>
          <input type=text name=species placeholder=SPECIES v-model=species>
        </div>
        <div>
          <input type=text name=fairWeight placeholder=WEIGHT v-model=fairWeight>
        </div>
        <div>
          <input type=text name=firstName placeholder=FIRST_NAME v-model=firstName>
        </div>
        <div>
          <input type=text name=lastName placeholder=LAST_NAME v-model=lastName>
        </div>
        <div>
          <input type=text name=clubName placeholder=COMPANY v-model=clubName>
        </div>
        <div>
          <input type=text name=picture placeholder=PICTURE_LINK v-model=picture>
        </div>
        <div>
          <button class=app_post_btn @click=addPost>Add</button>
        </div>
      </div>
  </div>
</template>

<script>
import Api from '@/services/Api'
export default {
  name: 'NewExhibitor',
  data () {
    return {
      saleNum: '',
      tagNum: '',
      species: '',
      fairWeight: '',
      firstName: '',
      lastName: '',
      clubName: '',
      picture: ''
    }
  },
  methods: {
    async addPost () {
      let newExhibitor = {
        saleNum: this.saleNum,
        tagNum: this.tagNum,
        species: this.species,
        fairWeight: this.fairWeight,
        firstName: this.firstName,
        lastName: this.lastName,
        clubName: this.clubName,
        picture: this.picture
      }
      await Api().post('exhibitor', newExhibitor)
        .then((response) => {
          console.log(response)
        })
        .catch((error) => {
          console.log(error)
        })
      /* this.$router.push({ name: 'Manage' }) */
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
