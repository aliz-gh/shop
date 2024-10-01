import { createRouter, createWebHistory } from 'vue-router'

import productView from '@/views/productView.vue'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: '/',
    //   name: 'home',
    //   component: HomeView
    // },
    {
      path: '/product',
      name: 'pro',
     
      component: productView
    }
  ]
})

export default router
