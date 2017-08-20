import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/layouts/Main'
import Home from '@/components/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Main,
      children: [
        {
          path: '',
          component: Home
        }
      ]
    }
  ]
})
