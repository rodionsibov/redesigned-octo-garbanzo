import { createRouter, createWebHistory } from 'vue-router'
import Products from '../views/Products.vue'
import Login from '../views/Login.vue'
import Cart from '../views/Cart.vue'
import Details from '../views/Details.vue'

const routes = [
  {
    path: '/',
    name: 'Products',
    component: Products
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  },
  {
    path: '/details/:id',
    name: 'Details',
    component: Details
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
