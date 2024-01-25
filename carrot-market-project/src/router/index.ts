import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
// import HomePage from '../views/HomePage.vue'
// import LifePage from '../views/LifePage.vue'
// import NearPage from '../views/NearPage.vue'
// import ChatPage from '../views/ChatPage.vue'
// import MyPage from '../views/MyPage.vue'

import { baseData } from '@/datas/datas'

// const routes: Array<RouteRecordRaw> = [
//   {
//     path: '/',
//     component: HomePage
//   },
//   {
//     path: '/life',
//     component: LifePage
//   },
//   {
//     path: '/near',
//     component: NearPage
//   },
//   {
//     path: '/chat',
//     component: ChatPage
//   },
//   {
//     path: '/mypage',
//     component: MyPage
//   },
// ]

const routes: RouteRecordRaw[] = baseData.map(data => {return {path: data.path, component: data.component}})

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
