import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home/index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/cream-diy',
    name: 'cream-diy',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "cream-diy" */ '../views/Cream-DIY/index.vue')
  },
  {
    path: '/customize',
    name:'customize',
    component: ()=>import(/* webpackChunkName: "customize" */ '../views/Customize/index.vue')
  },
  {
    path:'/design',
    name:'design',
    component:()=>import(/* webpackChunkName: "design" */ '../views/Design/index.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
