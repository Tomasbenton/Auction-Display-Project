import Vue from 'vue'
import Vuex from 'vuex'

const INDEX = 'INDEX'
const PREVIOUS_INDEX = 'PREVIOUS_INDEX'
const BIDDER_INDEX = 'BIDDER_INDEX'
const SALE_NUMBER = 'SALE_NUMBER'
const PREVIOUS_SALE_NUMBER = 'PREVIOUS_SALE_NUMBER'
const BIDDER_NUMBER = 'BIDDER_NUMBER'
const PURCHASE_INDEX = 'PURCHASE_INDEX'
const USER_ID = 'USER_ID'

Vue.use(Vuex)

const state = {
	index: 0,
	previousIndex: 0,
	bidderIndex: 0,
	saleNumber: 0,
	previousSaleNumber: 0,
	bidderNumber: 0,
	purchaseIndex: 0,
	userID: 0
}

const mutations = {
	[INDEX] (state, num) {
		state.index = num
	},
	[PREVIOUS_INDEX] (state, num) {
		state.previousIndex = num
	},
	[BIDDER_INDEX] (state, num) {
		state.bidderIndex = num
	},
	[SALE_NUMBER] (state, num) {
		state.saleNumber = num
	},
	[PREVIOUS_SALE_NUMBER] (state, num) {
		state.previousSaleNumber = num
	},
	[BIDDER_NUMBER] (state, num) {
		state.bidderNumber = num
	},
	[PURCHASE_INDEX] (state, num) {
		state.purchaseIndex = num
	},
	[USER_ID] (state, string) {
		state.userID = string
	}
}

const actions = {
	setIndex ({commit}, num) {
		commit(INDEX, num)
	},
	setPreviousIndex ({commit}, num) {
		commit(PREVIOUS_INDEX, num)
	},
	setBidderIndex ({commit}, num) {
		commit(BIDDER_INDEX, num)
	},
	setSaleNumber ({commit}, num) {
		commit(SALE_NUMBER, num)
	},
	setPreviousSaleNumber ({commit}, num) {
		commit(PREVIOUS_SALE_NUMBER, num)
	},
	setBidderNumber ({commit}, num) {
		commit(BIDDER_NUMBER, num)
	},
	setPurchaseIndex ({commit}, num) {
		commit(PURCHASE_INDEX, num)
	},
	setUserID ({commit}, string) {
		commit(USER_ID, string)
	}
}

export default new Vuex.Store({
	state,
	mutations,
	actions
})
