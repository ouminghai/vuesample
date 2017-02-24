import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/index'

import game from '../views/game'
import file from '../views/film'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
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
    }
  ]
})
