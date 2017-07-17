import Vue from 'vue'
import Router from 'vue-router'
import Landing from '@/components/Landing'
import GoodStuff from '@/components/GoodStuff'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/landing',
      name: 'landing',
      component: Landing
    },
    {
      path: '/',
      name: 'good-stuff',
      component: GoodStuff
    }

  ]
})
