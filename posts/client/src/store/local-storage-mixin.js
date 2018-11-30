import ls from 'local-storage'

export const localStorageMixin = {
  methods: {
    ls_setIndex (newIndex) {
      ls.set('index', newIndex)
    },
    ls_getIndex () {
      return ls.get('index')
    },
    ls_attachListener (callback) {
      ls.on('index', callback)
    },
    ls_setAuthentication (isAuthenticated) {
        ls.set('authentication', isAuthenticated)
    },
    ls_getAuthentication () {
      return ls.get('authentication')
    }
  }
}
