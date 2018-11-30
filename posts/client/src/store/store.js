import Vue from 'vue'
import Vuex from 'vuex'
import { NEW_INDEX, DECREMENTED, INCREMENTED } from './mutation-constants'

Vue.use(Vuex)

const state = {
  index: 0
}

const mutations = {
  [NEW_INDEX] (state, index) {
    state.index = index
  },
  [DECREMENTED] (state) {
    state.index--
  },
  [INCREMENTED] (state) {
    state.index++
  }
}

const actions = {
  setIndex ({commit}, index) {
    commit(NEW_INDEX, index)
  },
  decrementIndex({commit}) {
    commit(DECREMENTED)
  },
  incrementIndex({commit}) {
    commit(INCREMENTED)
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions
})
