import { createRouter, createWebHistory } from '@ionic/vue-router';
import Tabs from '../components/Tabs.vue'

const routes = [
  {
    path: '/',
    redirect: '/list'
  },
  {
    path: '/list/',
    component: Tabs,
    children: [
      {
        path: '',
        component: () => import('@/views/Home.vue')
      },
      // {
      //   path: 'profile',
      //   component: () => import('@/views/Profile.vue')
      // },
      // {
      //   path: 'dashboard',
      //   component: () => import('@/views/Dashboard.vue')
      // }
    ]
  },
  {
    path: '/profile',
    component: Tabs,
    children: [
      {
        path: '',
        component: () => import('@/views/Profile.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
