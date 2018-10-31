import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/components/Home'
import Admin from '@/components/Admin'
import Display from '@/components/Display'
import Manage from '@/components/Manage'

// tests that the admin button routes correcly
describe('Admin.vue', () => {
	it('should render the admin heading', done => {
		Vue.use(VueRouter)
		const router = new VueRouter({ routes: [
			{path: '/admin', name: 'admin', component: Admin}
		]})
		const vm = new Vue({
			el: document.createElement('div'),
			router: router,
			render: h => h('router-view'),
		})
		router.push({name: 'admin'})
		Vue.nextTick(() => {
			expect(vm.$el.querySelector('h1').textContent).to.equal('Admin Login')
			done()
		})
	})
})

// tests that the manage button routes correctly
describe('Manage.vue', () => {
	it('should render the manage page heading', done => {
		Vue.use(VueRouter)
		const router = new VueRouter({ routes: [
			{path: '/manage', name: 'manage', component: Manage}
		]})
		const vm = new Vue({
			el: document.createElement('div'),
			router: router,
			render: h => h('router-view'),
		})
		router.push({name: 'manage'})
		Vue.nextTick(() => {
			expect(vm.$el.querySelector('h1').textContent).to.equal('Manage Data')
			done()
		})
	})
})

// tests that the display button routes correctly
describe('Display.vue', () => {
	it('should render the buyer heading', done => {
		Vue.use(VueRouter)
		const router = new VueRouter({ routes: [
			{path: '/display', name: 'display', component: Display}
		]})
		const vm = new Vue({
			el: document.createElement('div'),
			router: router,
			render: h => h('router-view'),
		})
		router.push({name: 'display'})
		Vue.nextTick(() => {
			expect(vm.$el.querySelector('#buyer h2').textContent).to.equal('Buyer')
			done()
		})
	})
})