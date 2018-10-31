import Vue from 'vue'
import Manage from '@/components/Manage'

// tests button click
describe('Manage.vue', () => {
	it('should add a new item to the database', () => {
	    const Constructor = Vue.extend(Manage)
	    const ManageComponent = new Constructor().$mount()

	    ManageComponent.newItem = 'Hastings'
	    const button = ManageComponent.$el.querySelector('#addButton')

	    // simulates click
	    const clickEvent = new window.Event('click')
	    button.dispatchEvent(clickEvent)
	    ManageComponent._watcher.run()

	    // assert items
	    expect(ManageComponent.$el.textContent).to.contain('Hastings')
	    expect(ManageComponent.database).to.contain('Hastings')
	})
})