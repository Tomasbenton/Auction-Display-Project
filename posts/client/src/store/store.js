import Vue from 'vue'
import Vuex from 'vuex'
import { INDEX, DECREMENTED_INDEX, INCREMENTED_INDEX, AUTHENTICATED } from './mutation-constants'

Vue.use(Vuex)

const state = {
  index: 0,
  authenticated: false
}

const mutations = {
  [INDEX] (state, index) {
    state.index = index
  },
  [DECREMENTED_INDEX] (state) {
    state.index--
  },
  [INCREMENTED_INDEX] (state) {
    state.index++
  },
  [AUTHENTICATED] (state) {
    state.authenticated = true
  }
}

const actions = {
  setIndex ({commit}, index) {
    commit(INDEX, index)
  },
  decrementIndex({commit}) {
    commit(DECREMENTED_INDEX)
  },
  incrementIndex({commit}) {
    commit(INCREMENTED_INDEX)
  },
  authenticated({commit}) {
    commit(AUTHENTICATED)
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions
})
