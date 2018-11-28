import ls from 'local-storage'

export const localStorageMixin = {
	methods: {
		ls_setIndex (index) {
			ls.st('newIndex')
		},
		ls_geteIndex () {
			return ls.get('newIndex')
		},
		ls_attachListener (callback) {
			ls.on('newIndex', callback)
		}
	}
}