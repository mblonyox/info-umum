import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'

import Organisasi from './organisasi.route'


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Home
    },
    Organisasi
  ]
})
