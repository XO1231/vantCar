import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta:{footShow:true}
    },
    {
      path: '/goods/:id',
      name: 'goods',
      component: () => import('@/views/goods.vue'),
      meta:{footShow:false}
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/About.vue'),
      meta:{footShow:true}
    },
    {
      path: '/info',
      name: 'info',
      component: () => import( '@/views/info.vue'),
      meta:{footShow:true}
    }
  ]
})
