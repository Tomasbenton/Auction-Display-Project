<template>
  <div class="exhibitor">
    <h1>Add Exhibitor</h1>
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
          <button class=app_post_btn @click=addExhibitor>Add</button>
        </div>
      </div>
  </div>
</template>

<script>
// import Api from '@/services/Api'
export default {
  name: 'NewExhibitor',
  data () {
    return {
      entrySaleNumber: null,
      fullName: null,
      tag: null,
      animalDescription: null,
      checkInWeight: null,
      className: null,
      departmentName: null,
      clubName: null,
      showClassName: null,
      pictureName: null
    }
  },
  methods: {
    async addExhibitor () {
      let newExhibitor = {
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
      let uri = 'http://localhost:8081/exhibitor/add'
      this.axios.post(uri, newExhibitor).then((response) => {
        console.log(response)
      })
      /* this.$router.push({ name: 'Manage' }) */
    }
  }
}
</script>
<style type=text/css>
h1 {
 text-align: center;
}
.form input, .form textarea {
  width: 500px;
  border: 1px solid #e0dede;
  outline: none;
  font-size: 12px;
}
.form div {
  text-align: center;
}

.app_post_btn {
  width: 520px;
  border: none;
}
</style>
