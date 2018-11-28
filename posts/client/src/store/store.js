import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  index: 0
}

const mutations = {
  increment(state) {
    state.index++
  },
  decrement(state) {
    state.index--
  },
  setIndex(state, e){
    state.index = e.index
    localStorage.setItem('index', e.index)
  },
  getIndex(state){
    if (localStorage.getItem('index')){
      
      state.index = localStorage.getItem('index')
    }
  }
}

const getters = {
}

export default new Vuex.Store({
  state,
  mutations
})
