import { createRouter, createWebHistory } from 'vue-router'

import productView from '@/views/productView.vue'
import HomeView from '@/views/HomeView.vue'
import oneProduct from '@/views/oneProduct.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/product',
      name: 'pro',
     
      component: productView
    },
    {
      path: '/oneProduct/:id',
      name: 'product',
     
      component: oneProduct
    }
  ]
})

export default router
