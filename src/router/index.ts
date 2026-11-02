/*
 * @Description: 路由設定
 * @Version: 1.0
 * @Autor: GiottoLLL7
 * @Date: 2024-05-25 12:38:23
 * @LastEditors: GiottoLLL7
 * @LastEditTime: 2026-10-29 17:35:00
 */
import { createRouter, createWebHistory } from 'vue-router'

/**
 * 路由元件採懶載入，降低首屏載入體積。
 * 詳情頁內容較多，拆分後可讓首頁只載入必要程式碼。
 */
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/detail',
      name: 'detail',
      component: () => import('../views/DetailView.vue')
    },
    {
      path: '/business',
      name: 'business',
      component: () => import('../views/businessView.vue')
    },
    {
      path: '/restaurant',
      name: 'restaurant',
      component: () => import('../views/RestaurantView.vue')
    },
    {
      path: '/floorWaxing',
      name: 'floorWaxing',
      component: () => import('../views/FloorWaxingView.vue')
    },
    {
      path: '/aboutus',
      name: 'aboutus',
      component: () => import('../views/AboutUsView.vue')
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    // 解決路由跳轉後會捲動到最底部
    if (savedPosition) {
      return savedPosition
    }
    return { top: 0 }
  }
})

export default router
