import ls from 'local-storage'

export const localStorageMixin = {
  methods: {
    ls_setIndex (index) {
      ls.set('newIndex', index)
    },
    ls_getIndex () {
      return ls.get('newIndex')
    },
    ls_attachListener (callback) {
      ls.on('newIndex', callback)
    }
  }
}
