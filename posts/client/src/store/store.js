import Vue from 'vue'
import Vuex from 'vuex'
import { USER_ID, USERS } from './mutation-constants'

Vue.use(Vuex)

const state = {
	userID: null,
	users: []
}

const mutations = {
	[USER_ID](state, userID) {
		state.userID = userID
	},
	[USERS](state, users) {
		state.users = users
	}
}

const actions = {
	setUserID({commit}, userID) {
		commit(USER_ID, userID)
	},
	setUsers({commit}, users) {
		commit(USERS, users)
	}
}

export default new Vuex.Store({
	state,
	mutations,
	actions
})
