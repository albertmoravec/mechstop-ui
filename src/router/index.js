import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '../pages/Dashboard'
import Keysets from '../pages/Keysets'

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
      path: 'manufacturers',
      meta: {
        title: 'Manufacturers',
        icon: 'el-icon-setting'
      }
    },
    {
      path: 'colours',
      meta: {
        title: 'Colours',
        icon: 'el-icon-edit'
      }  
    },
    {
      path: 'materials',
      meta: {
        title: 'Materials',
        icon: 'el-icon-news'
      }
    },
    {
      path: 'profiles',
      meta: {
        title: 'Profiles',
        icon: 'el-icon-edit-outline'
      }
    }
  ]
})
