import Vue from 'vue'
import Router from 'vue-router'
import Hello from 'components/Hello'
import Index from 'components/Index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: {
        a: Hello,
        b: Hello
      }
    },
    {
      path: '/index',
      name: 'index',
      component: {
        a: Index,
        b: Index
      }
    }

  ]
})
