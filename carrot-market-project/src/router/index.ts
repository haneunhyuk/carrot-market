import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import LifePage from '../views/LifePage.vue'
import NearPage from '../views/NearPage.vue'
import ChatPage from '../views/ChatPage.vue'
import MyPage from '../views/MyPage.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: HomePage
  },
  {
    path: '/life',
    component: LifePage
  },
  {
    path: '/near',
    component: NearPage
  },
  {
    path: '/chat',
    component: ChatPage
  },
  {
    path: '/mypage',
    component: MyPage
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
