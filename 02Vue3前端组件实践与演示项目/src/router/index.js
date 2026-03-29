import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [

  { path : '/',
    redirect : '/login'
  },
  {
    path: '/index',
    name: 'index',
    component: ()=>import('../views/login/index.vue'),
    children:[
        {
          path: '/index/lbt',
          name: 'lbt',
          component: () => import('../views/login/lbt.vue')
        },
        {
          path: '/index/first',
          name: 'first',
          component: () => import('../views/login/first.vue')
        },
        {
          path: '/index/user',
          name: 'user',
          component: () => import('../views/login/user.vue')
        },
        {
          path: '/index/direct',
          name: 'direct',
          component: () => import('../views/login/direct.vue')
        },
        {
          path: '/index/time',
          name: 'time',
          component: () => import('../views/login/time.vue')
        }

    ]

  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login/login.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
