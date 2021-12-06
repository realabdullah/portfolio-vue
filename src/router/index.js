import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
    // meta: {
    //   enterClass: 'animate__animated animate__fadeInUp',
    //   leaveClass: 'fade-leave'
    // }
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
    // meta: {
    //   enterClass: 'animate__animated animate__fadeInUp',
    //   leaveClass: 'fade-leave'
    // }
  },
  {
    path: '/works',
    name: 'Works',
    component: () => import('../views/Works.vue')
    // meta: {
    //   enterClass: 'animate__animated animate__fadeInUp',
    //   leaveClass: 'fade-leave'
    // }
  },
  {
    path: '/contact-me',
    name: 'Contact',
    component: () => import('../views/Contact.vue')
    // meta: {
    //   enterClass: 'animate__animated animate__fadeInUp',
    //   leaveClass: 'fade-leave'
    // }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
