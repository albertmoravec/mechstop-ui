import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '../pages/Dashboard'
import Keysets from '../pages/Keysets'
import Manufacturers from '../pages/Manufacturers'
import Profiles from '../pages/Profiles'
import Materials from '../pages/Materials'
import Colors from '../pages/Colors'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      alias: '/dashboard',
      component: Dashboard,
      meta: {
        title: 'Dashboard',
        icon: 'el-icon-tickets'
      }
    },
    {
      path: '/keysets',
      component: Keysets,
      meta: {
        title: 'Keysets',
        icon: 'el-icon-menu'
      },
    },
    {
      path: '/manufacturers',
      component: Manufacturers,
      meta: {
        title: 'Manufacturers',
        icon: 'el-icon-setting'
      }
    },
    {
      path: '/colors',
      component: Colors,
      meta: {
        title: 'Colors',
        icon: 'el-icon-edit'
      }  
    },
    {
      path: '/materials',
      component: Materials,
      meta: {
        title: 'Materials',
        icon: 'el-icon-news'
      }
    },
    {
      path: '/profiles',
      component: Profiles,
      meta: {
        title: 'Profiles',
        icon: 'el-icon-edit-outline'
      }
    }
  ]
})
