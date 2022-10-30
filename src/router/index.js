import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: ()=>import('../views/Index.vue'), 
    redirect:'./index0',  
    children:[
      {
        path: '/index0',
        name: 'index0',
        component: ()=>import('../views/Index0.vue')
      },
      {
        path: '/my',
        name: 'my',    
        component: ()=>import('../views/My.vue')
      }
    ]
  },
  {
    path:'/info/:id',
    name:'info',
    component:()=>import('../views/Info.vue')
    
  },
  {
    path:'/sign',
    name:'sign',
    component:()=>import('../views/sign.vue')
    
  },
  {
    path:'/login',
    name:'login',
    component:()=>import('../views/login.vue')
    
  },
  {
    path:'/collect',
    name:'collect',
    component:()=>import('../views/collect.vue')
    
  },
  {
    path:'/search',
    name:'search',
    component:()=>import('../views/search.vue')
    
  },




  
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
