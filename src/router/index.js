import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CartList from '../components/cart/Cart_List.vue';
import ProductList from '../components/product/Product_List.vue';
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'

const routes = [
  {
    path:'/home',
    name:'HomeView',
    component: HomeView
  },
  {
    path: '/inventory',
    component: ProductList
  },
  {
    path: '/cart',
    component: CartList
  },
  {
    path: '/',
    redirect: '/inventory'
  },
  {
    path: '/register',
    name: 'registerView',
    component: RegisterView
  },    
  {
    path: '/login',
    name: 'loginView',
    component: LoginView
  },
]
const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router