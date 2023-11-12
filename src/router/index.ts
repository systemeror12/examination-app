import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '',
    redirect: '/folder/Home'
  },
  {
    path: '/folder/Home',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/folder/OrderNow',
    name: 'Order Now',
    component: () => import('../views/OrderNow/OrderNow.vue')
  },
  {
    path: '/folder/AddToCard',
    name: 'AddToCard',
    component: () => import('../views/OrderNow/AddToCard.vue')
  },
  {
    path: '/folder/OrderSummary',
    name: 'OrderSummary',
    component: () => import('../views/OrderNow/OrderSummary.vue')
  },
  {
    path: '/folder/OrderRecieved',
    name: 'OrderRecieved',
    component: () => import('../views/OrderNow/OrderRecieved.vue')
  },
  {
    path: '/folder/LoyaltyPoints',
    name: 'Loyalty Points',
    component: () => import('../views/LoyaltyPoints.vue')
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
