import { createRouter, createWebHistory, RouteRecordRaw,createWebHashHistory  } from 'vue-router'
import Home from '../views/Home.vue'
import APP from '../APP.vue'
import MainView from '../views/MainView.vue'
import Display from "../views/Display.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: "/MainView"
  },
  {
    path: '/MainView',
    name: 'MainView',
    component: () => import('../views/MainView.vue'),
    meta: {
      keepAlive:false
    }
  },
  {
    path: '/Display',
    name: 'Display',
    component: () => import('../views/Display.vue')
  }
]

const router = createRouter({
  //history: createWebHistory(process.env.BASE_URL),
  history: createWebHashHistory(),
  routes
})

export default router
