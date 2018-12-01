<template>
  <div class="exhibitor">
    <h1>Add Exhibitor</h1>
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
          <button class=app_post_btn @click=validate>Add</button>
          <router-link v-bind:to="{ name: 'Manage' }">
            <button>Return to Manage</button>
          </router-link>
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
      saleNumber: null,
      fullName: null,
      tag: null,
      species: null,
      animalDescription: null,
      checkInWeight: null,
      clubName: null,
      showClassName: null,
      placing: null,
      buyback: null
    }
  },
  methods: {
    validate () {
      this.$validator.validateAll()
      if (!this.errors.any()) {
        this.addExhibitor()
      }
    },
    async addExhibitor () {
      let newExhibitor = {
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
      // let uri = 'http://localhost:8081/exhibitor/add'
      let uri = `http://${process.env.HOST_NAME}:8081/exhibitor/add`
      this.axios.post(uri, newExhibitor).then((response) => {
        console.log(response)
      })
    }
  }
}
</script>
<style>
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
