<template>
  <div class="exhibitors">
    <h1>Edit Exhibitor</h1>
    <div class=form>
        <div>
          <input class="input-field" v-validate="'required|numeric'" type=text name=saleNumber placeholder="Sale Number" v-model=saleNumber>
          <label class="error-label" for="saleNumber" >{{ errors.first('saleNumber') }}</label>
        </div>
        <div>
          <input class="input-field" v-validate="'required|alpha_spaces'" type=text name=fullName placeholder="Full Name" v-model=fullName>
          <label class="error-label" for="fullName" >{{ errors.first('fullName') }}</label> 
        </div>
        <div>
          <input class="input-field" v-validate="'required'" type=text name=tag placeholder="Tag" v-model=tag>
          <label class="error-label" for="tag" >{{ errors.first('tag') }}</label>
        </div>
        <div>
          <input class="input-field" v-validate="'required|alpha'" type=text name=species placeholder="Species" v-model=species>
          <label class="error-label" for="species" >{{ errors.first('species') }}</label>
        </div>
        <div>
          <input class="input-field" v-validate="''" type=text name=animalDescription placeholder="Animal Description" v-model=animalDescription>
          <label class="error-label" for="animalDescription" >{{ errors.first('animalDescription') }}</label>
        </div>
        <div>
          <input class="input-field" v-validate="'required|decimal'" type=text name=checkInWeight placeholder="Check-In Weight" v-model=checkInWeight>
          <label class="error-label" for="checkInWeight" >{{ errors.first('checkInWeight') }}</label>
        </div>
        <div>
          <input class="input-field" v-validate="''" type=text name=clubName placeholder="Club Name" v-model=clubName>
          <label class="error-label" for="clubName" >{{ errors.first('clubName') }}</label>
        </div>
        <div>
          <input class="input-field" v-validate="'alpha_spaces'" type=text name=showClassName placeholder="Show Class Name" v-model=showClassName>
          <label class="error-label" for="showClassName" >{{ errors.first('showClassName') }}</label>
        </div>
        <div>
          <input class="input-field" v-validate="''" type=text name=placing placeholder="Placing" v-model=placing>
          <label class="error-label" for="placing" >{{ errors.first('placing') }}</label>
        </div>
        <div>
          <input class="input-field" v-validate="'numeric'" type=text name=buyback placeholder="Buyback" v-model=buyback>
          <label class="error-label" for="buyback" >{{ errors.first('buyback') }}</label>
        </div>
        <div>
          <button class="app_post_btn" @click="validate">Update</button>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'EditExhibitor',
  data () {
    return {
    saleNumber: '',
    fullName: '',
    tag: '',
    species: '',
    animalDescription: '',
    checkInWeight: '',
    clubName: '',
    showClassName: '',
    placing: '',
    buyback: ''
    }
  },
  mounted () {
    this.getExhibitor()
  },
  methods: {
    async getExhibitor () {
      // let uri = 'http://localhost:8081/exhibitor/' + this.$route.params.id
      let uri = `http://${process.env.HOST_NAME}:8081/exhibitor/` + this.$route.params.id
      await this.axios.get(uri).then(response => {
      this.saleNumber = response.saleNumber
      this.fullName = response.fullName
      this.tag = response.tag
      this.species = response.species
      this.animalDescription = response.animalDescription
      this.checkInWeight = response.checkInWeight
      this.clubName = response.clubName
      this.showClassName = response.showClassName
      this.placing = response.placing
      this.buyback = response.buyback
      })
    },
    validate () {
      this.$validator.validateAll()
      if (!this.errors.any()) {
        this.updatePost()
      }
    },
    async updatePost () {
      
      let updatedExhibitor = {
        id: this.$route.params.id,
        saleNumber: this.saleNumber,
        fullName: this.fullName,
        tag: this.tag,
        species: this.species,
        animalDescription: this.animalDescription,
        checkInWeight: this.checkInWeight,
        clubName: this.clubName,
        showClassName: this.showClassName,
        placing: this.placing,
        buyback: this.buyback
      }
      // let uri = 'http://localhost:8081/exhibitor/' + this.$route.params.id
      let uri = `http://${process.env.HOST_NAME}:8081/exhibitor/` + this.$route.params.id
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
