import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import Heritage from '../views/Heritage.vue'
import Destinations from '../views/Destinations.vue'
import About from '../views/About.vue'
import HeritageDetail from '../views/HeritageDetail.vue'
import DesignSystem from '../views/DesignSystem.vue'

const router = createRouter({
  history: createWebHistory(),

  routes: [

    // =========================
    // HOME
    // =========================

    {
      path: '/',
      name: 'home',
      component: Home
    },


    // =========================
    // HERITAGE
    // =========================

    {
      path: '/heritage',
      name: 'heritage',
      component: Heritage
    },


    // =========================
    // HERITAGE DETAIL
    // =========================
    // Example:
    // /heritage/hundred-islands

    {
      path: '/heritage/:slug',
      name: 'heritage-detail',
      component: HeritageDetail
    },


    // =========================
    // DESTINATIONS
    // =========================

    {
      path: '/destinations',
      name: 'destinations',
      component: Destinations
    },


    // =========================
    // ABOUT
    // =========================

    {
      path: '/about',
      name: 'about',
      component: About
    },


    // =========================
    // DESIGN SYSTEM
    // =========================

    {
      path: '/design-system',
      name: 'design-system',
      component: DesignSystem
    },


    // =========================
    // 404
    // =========================

    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: Heritage
    }

  ]
})

export default router