import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/index'

import game from '../views/game'
import film from '../views/film'
Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/index',
      name: 'index',
      component: Index,
      children: [
        {
          path: 'game',
          component: game
        },
        {
          path: 'film',
          component: film
        }
      ]
    },
    {
      path: '/login',
      component: require('../views/User/Login')
    },
    {
      path: '*', redirect: '/index/game'
    }
  ]
})
export default router
