<template>
  <div class="exhibitors">
    <h1>Edit Post</h1>
    <div class=form>
      <div>
        <input type=text name=entrySaleNumber placeholder="Entry Sale Number" v-model=entrySaleNumber>
      </div>
      <div>
        <input type=text name=fullName placeholder="Full Name" v-model=fullName>
      </div>
      <div>
        <input type=text name=tag placeholder="Tag" v-model=tag>
      </div>
      <div>
        <input type=text name=animalDescription placeholder="Animal Description" v-model=animalDescription>
      </div>
      <div>
        <input type=text name=checkInWeight placeholder="Check-In Weight" v-model=checkInWeight>
      </div>
      <div>
        <input type=text name=className placeholder="Class Name" v-model=className>
      </div>
      <div>
        <input type=text name=departmentName placeholder="Department Name" v-model=departmentName>
      </div>
      <div>
        <input type=text name=clubName placeholder="Club Name" v-model=clubName>
      </div>
      <div>
        <input type=text name=showClassName placeholder="Show Class Name" v-model=showClassName>
      </div>
      <div>
        <input type=text name=pictureName placeholder="Picture File Name" v-model=pictureName>
      </div>
      <div>
          <button class="app_post_btn" @click="updatePost">Update</button>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'EditExhibitor',
  data () {
    return {
    entrySaleNumber: '',
    fullName: '',
    tag: '',
    animalDescription: '',
    checkInWeight: '',
    className: '',
    departmentName: '',
    clubName: '',
    showClassName: '',
    pictureName: ''
    }
  },
  mounted () {
    this.getExhibitor()
  },
  methods: {
    async getExhibitor () {
      let uri = 'http://localhost:8081/exhibitor/' + this.$route.params.id
      await this.axios.get(uri).then(response => {
      this.entrySaleNumber = response.entrySaleNumber
      this.fullName = response.fullName
      this.tag = response.tag
      this.animalDescription = response.animalDescription
      this.checkInWeight = response.checkInWeight
      this.className = response.className
      this.departmentName = response.departmentName
      this.clubName = response.clubName
      this.showClassName = response.showClassName
      this.pictureName = response.pictureName
      })
    },
    async updatePost () {
      let updatedExhibitor = {
        id: this.$route.params.id,
        entrySaleNumber: this.entrySaleNumber,
        fullName: this.fullName,
        tag: this.tag,
        animalDescription: this.animalDescription,
        checkInWeight: this.checkInWeight,
        className: this.className,
        departmentName: this.departmentName,
        clubName: this.clubName,
        showClassName: this.showClassName,
        pictureName: this.pictureName
      }
      let uri = 'http://localhost:8081/exhibitor/' + this.$route.params.id
      await this.axios.put(uri, updatedExhibitor).then((response) => {
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
