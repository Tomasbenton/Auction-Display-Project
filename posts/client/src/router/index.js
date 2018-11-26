import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Admin from '@/components/Admin'
import Display from '@/components/Display'
import Exhibitor from '@/components/Exhibitor'
import Buyer from '@/components/Buyer'
import Manage from '@/components/Manage'
import Posts from '@/components/Posts'
import NewExhibitor from '@/components/NewExhibitor'
import NewBuyer from '@/components/NewBuyer'
import EditPost from '@/components/EditPost'
import Control from '@/components/Control'
import ManageExhibitors from '@/components/ManageExhibitors'
import ManageBuyers from '@/components/ManageBuyers'
// import Search from '@/components/Search'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: {
        name: 'Login'
      }
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
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
    },
    {
      path: '/exhibitor',
      name: 'Exhibitor',
      component: Exhibitor
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
    {
      path: '/manage/exhibitors',
      name: 'ManageExhibitors',
      component: ManageExhibitors
    },
    {
      path: '/manage/buyers',
      name: 'ManageBuyers',
      component: ManageBuyers
    },
    {
      path: '/posts',
      name: 'Posts',
      component: Posts
    },
    {
      path: '/manage/exhibitors/new',
      name: 'NewExhibitor',
      component: NewExhibitor
    },
    {
      path: '/manage/buyers/new',
      name: 'NewBuyer',
      component: NewBuyer
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
    }
  ]
})
