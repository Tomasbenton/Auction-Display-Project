<template>
  <div class="posts">
    <h1>Edit Post</h1>
    <div class=form>
      <div>
        <input type=text name=tagNum placeholder=TAG_NUMBER v-model=tagNum>
      </div>
      <div>
        <input type=text name=species placeholder=SPECIES v-model=species>
      </div>
      <div>
        <input type=text name=saleNum placeholder=SALE_NUMBER v-model=saleNum>
      </div>
      <div>
        <input type=text name=firstName placeholder=FIRST_NAME v-model=firstName>
      </div>
      <div>
        <input type=text name=lastName placeholder=LAST_NAME v-model=lastName>
      </div>
      <div>
        <input type=text name=fairWeight placeholder=FAIR_WEIGHT v-model=fairWeight>
      </div>
      <div>
        <input type=text name=clubName placeholder=CLUB_NAME v-model=clubName>
      </div>
      <div>
          <button class="app_post_btn" @click="updatePost">Update</button>
        </div>
      </div>
  </div>
</template>

<script>
import PostsService from '@/services/PostsService'
export default {
  name: 'EditPost',
  data () {
    return {
      tagNum: '',
      species: '',
      saleNum: '',
      firstName: '',
      lastName: '',
      fairWeight: '',
      clubName: ''
    }
  },
  mounted () {
    this.getPost()
  },
  methods: {
    async getPost () {
      const response = await PostsService.getPost({
        id: this.$route.params.id
      })
      this.tagNum = response.data.tagNum
      this.species = response.data.species
      this.saleNum = response.data.saleNum
      this.firstName = response.data.firstName
      this.lastName = response.data.lastName
      this.fairWeight = response.data.fairWeight
      this.clubName = response.data.clubName
    },
    async updatePost () {
      await PostsService.updatePost({
        id: this.$route.params.id,
        tagNum: this.tagNum,
        species: this.species,
        saleNum: this.saleNum,
        firstName: this.firstName,
        lastName: this.lastName,
        fairWeight: this.fairWeight,
        clubName: this.clubName
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
  border: 1px solid #e0dede;
  outline: none;
  font-size: 12px;
}
.form div {
  margin: 20px;
}
.app_post_btn {
  background: #4d7ef7;
  color: #fff;
  padding: 10px 80px;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: bold;
  width: 520px;
  border: none;
  cursor: pointer;
}
</style>
