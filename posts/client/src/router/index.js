import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/HelloWorld'
import Home from '@/components/Home'
import Admin from '@/components/Admin'
import Display from '@/components/Display'
// import Posts from '@/components/Posts'
// import NewPost from '@/components/NewPost'
// import EditPost from '@/components/EditPost'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/admin',
      name: 'Admin',
      component: Admin
    },
    {
      path: '/display',
      name: 'Display',
      component: Display
    }

    // {
    //   path: '/posts',
    //   name: 'Posts',
    //   component: Posts
    // },
    // {
    //   path: '/posts/new',
    //   name: 'NewPost',
    //   component: NewPost
    // },
    // {
    //   path: '/posts/:id',
    //   name: 'EditPost',
    //   component: EditPost
    // }
  ]
})
