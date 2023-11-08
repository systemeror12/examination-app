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
    component: () => import('../views/OrderNow.vue')
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
