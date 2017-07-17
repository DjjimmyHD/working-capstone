import Vue from 'vue'
import Router from 'vue-router'
import Landing from '@/components/Landing'
import GoodStuff from '@/components/GoodStuff'
import About from '@/components/About'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'landing',
      component: Landing
    },
    {
      path: '/GoodStuff',
      name: 'good-stuff',
      component: GoodStuff
    },
    {
      path: '/About',
      name: 'about',
      component: About
    }

  ]
})
