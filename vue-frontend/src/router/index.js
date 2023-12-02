import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      beforeEnter: (to, from, next) => {
        if (localStorage.getItem('login')) {
          next()
        } else {
          next('/signin')
        }
      }
    },
    {
      path: '/form',
      name: 'form',
      component: () => import('../views/EmployeeForm.vue')
    },
    {
      path: '/edit/:id',
      name: 'edit',
      component: () => import('../views/EmployeeForm.vue')
    },
    {
      path: '/manage',
      name: 'manage',
      component: () => import('../views/ManageEmployee.vue')
    },
    {
      path: '/get/:id',
      name: 'viewEmployee',
      component: () => import('../views/ViewEmployee.vue')
    },
    {
      path: '/signin',
      name: 'signin',
      component: () => import('../views/SignIn.vue')
    }
  ]
})

export default router
