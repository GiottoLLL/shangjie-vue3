/*
 * @Description: 路由首页
 * @Version: 0.1
 * @Autor: GiottoLLL7
 * @Date: 2024-05-25 12:38:23
 * @LastEditors: GiottoLLL7
 * @LastEditTime: 2024-08-14 22:58:46
 */
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DetailView from '../views/DetailView.vue'
import BusinessView from '../views/businessView.vue'
import RestaurantView from '../views/RestaurantView.vue'
import FloorWaxingView from '@/views/FloorWaxingView.vue'
import AboutUsView from '../views/AboutUsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/detail',
      name: 'detail',
      component: DetailView
    },
    {
      path: '/business',
      name: 'business',
      component: BusinessView
    },
    {
      path: '/restaurant',
      name: 'restaurant',
      component: RestaurantView
    },
    {
      path: '/floorWaxing',
      name: 'floorWaxing',
      component: FloorWaxingView
    },
    {
      path: '/aboutus',
      name: 'aboutus',
      component: AboutUsView
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    // 解决路由跳转后会滚动到最底部
    if (savedPosition) {
      return savedPosition
    } else {
      return {top: 0}
    }
  }
})

export default router
