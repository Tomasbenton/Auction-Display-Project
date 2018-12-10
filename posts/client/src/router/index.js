import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Admin from '@/components/Admin'
import Display from '@/components/Display'
import Exhibitor from '@/components/Exhibitor'
import Buyer from '@/components/Buyer'
import Manage from '@/components/Manage'
import ManageExhibitors from '@/components/ManageExhibitors'
import ManageBuyers from '@/components/ManageBuyers'
import NewExhibitor from '@/components/NewExhibitor'
import NewBuyer from '@/components/NewBuyer'
import EditBuyer from '@/components/EditBuyer'
import EditExhibitor from '@/components/EditExhibitor'
import ExhibitorTransaction from '@/components/ExhibitorTransaction'
import AddOnTransaction from '@/components/AddOnTransaction'

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
      path: '/manage/buyer/edit',
      name: 'EditBuyer',
      component: EditBuyer
    },
    {
      path: '/manage/exhibitor/edit',
      name: 'EditExhibitor',
      component: EditExhibitor
    },
    {
      path: '/transaction/exhibitor',
      name: 'ExhibitorTransaction',
      component: ExhibitorTransaction
    },
    {
      path: '/transaction/addon',
      name: 'AddOnTransaction',
      component: AddOnTransaction
    }
  ]
})
