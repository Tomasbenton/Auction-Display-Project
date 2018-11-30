<template>
  <div id='app'>
        <div id='nav'>
        </div>
        <router-view />
  </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'
import {localStorageMixin} from './store/local-storage-mixin'
  export default {
    name: 'App',
    computed: {
      ...mapState({
        authenticated: state => state.authenticated
      })
    },
    mixins: [localStorageMixin],
    data() {
      return {
        authenticated: true,
        users: []
      }
    },
    created: function() {
        this.fetchUsers()
    },

    mounted() {
      if (this.ls_getIndex() === false) {

      }
    },
    methods: {
      authenticated() {
        this.authenticated()
      },
      fetchUsers() {
        let uri = 'http://localhost:8081/user'
          // let uri = 'http://192.168.21.105:8081/user'
          this.axios.get(uri).then(response => {
            this.users = response.data
          })
      },
      getUserByName(name) {
        // users is array of objects, this mapping searches for index of object with matching username
        var index = this.users.map(function(e) { return e.username.toLowerCase() }).indexOf(name.toLowerCase())
        return this.users[index]
      }
    },
    ...mapActions([ 'authenticated' ])
  }
</script>

<style>
</style>
