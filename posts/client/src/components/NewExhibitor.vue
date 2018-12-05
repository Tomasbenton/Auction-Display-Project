<template>
  <div id="newExhibitor">
    <h1>Add Exhibitor</h1>
    <div class=form>
      <label class="errorLabel" for="saleNumber" >{{ errors.first('saleNumber') }}</label>
      <input v-validate="'required|numeric'" type="text" name="saleNumber" placeholder="Sale Number" v-model="saleNumber">
      <label class="errorLabel" for="fullName" >{{ errors.first('fullName') }}</label> 
      <input v-validate="'required|alpha_spaces'" type="text" name="fullName" placeholder="Full Name" v-model=fullName>
      <label class="errorLabel" for="tag" >{{ errors.first('tag') }}</label>
      <input v-validate="'required'" type="text" name="tag" placeholder="Tag" v-model="tag">
      <label class="errorLabel" for="species" >{{ errors.first('species') }}</label>
      <input v-validate="'required|alpha'" type="text" name="species" placeholder="Species" v-model="species">
      <label class="errorLabel" for="checkInWeight" >{{ errors.first('checkInWeight') }}</label>
      <input v-validate="'required|decimal'" type="text" name="checkInWeight" placeholder="Check-In Weight" v-model=checkInWeight>
      <label class="errorLabel" for="animalDescription" >{{ errors.first('animalDescription') }}</label>
      <input v-validate="''" type="text" name="animalDescription" placeholder="Animal Description" v-model="animalDescription">
      <label class="errorLabel" for="clubName" >{{ errors.first('clubName') }}</label>
      <input v-validate="''" type="text" name="clubName" placeholder="Club Name" v-model=clubName>
      <label class="errorLabel" for="showClassName" >{{ errors.first('showClassName') }}</label>
      <input v-validate="'alpha_spaces'" type="text" name="showClassName" placeholder="Show Class Name" v-model="showClassName">
      <label class="errorLabel" for="placing" >{{ errors.first('placing') }}</label>
      <input v-validate="''" type="text" name="placing" placeholder="Placing" v-model=placing>
      <label class="errorLabel" for="buyback" >{{ errors.first('buyback') }}</label>
      <input v-validate="'numeric'" type="text" name="buyback" placeholder="Buyback" v-model=buyback>
      <button class=app_post_btn @click=validate>Add</button>
      <router-link v-bind:to="{ name: 'Manage', params: {view: true } }">
        <button>Return to Manage</button>
      </router-link>
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
<style scoped>
  #newExhibitor{
    width: 400px;
    margin: 0 auto;
    padding-bottom: 50px;
  }

  input{
    border: 1px solid #f1f1f1;
    height: 50px;
  }

  button{
    width: 150px;
    height: 40px;
    border-radius: 0px;
  }

  .errorLabel{
    font-size: 12px;
    color: #ff0000;
  }
</style>
