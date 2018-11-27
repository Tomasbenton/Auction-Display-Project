import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Admin from '@/components/Admin'
import Buyer from '@/components/Buyer'
import Manage from '@/components/Manage'
import Posts from '@/components/Posts'
import NewPost from '@/components/NewPost'
import EditPost from '@/components/EditPost'
import Control from '@/components/Control'
import Display1 from '@/components/Display-1'
import Display from '@/components/Display'
// import Search from '@/components/Search'

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
      path: '/buyer',
      name: 'Buyer',
      component: Buyer
    },
    {
      path: '/manage',
      name: 'Manage',
      component: Manage
    },
    /* {
      path: '/search',
      name: 'Search',
      component: Search
    }, */
    {
      path: '/posts',
      name: 'Posts',
      component: Posts
    },
    {
      path: '/posts/new',
      name: 'NewPost',
      component: NewPost
    },
    {
      path: '/posts/:id',
      name: 'EditPost',
      component: EditPost
    },
    {
      path: '/control',
      name: 'Control',
      component: Control
    },
    {
      path: '/exhibitor',
      name: 'Display1',
      component: Display1
    },
    {
      path: '/display',
      name: 'Display',
      component: Display
    }
  ]
})
