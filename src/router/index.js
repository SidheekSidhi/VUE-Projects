import vue from 'vue'
import Router from 'vue-router'
import Navbar from '../components/Navbar.vue'
import Sidebar from '../components/Sidebar.vue'
import Form from '../components/ Form.vue'
import App from '../App.vue'


vue.use(Router)

export default new Router({
  mode: 'history',
  routes:[
  {
    path: '/navbar',
    name: 'Navbar',
    component: Navbar
  },
  {
    path: '/sidebar',
    name: 'Sidebar',
    component: Sidebar
  },
  {
    path: '/form',
    name: 'Form',
   component: Form
  },
  {
   path:'/home',
   component:App}
]
})



/*import { createRouter, createWebHistory } from 'vue-router'
import Navbar from '../components/Navbar.vue'
import Sidebar from '../components/Sidebar.vue'
import Form from '../components/ Form.vue'

vue.use(Router)

const routes = [
  {
    path: '/navbar',
    name: 'Navbar',
    component: Navbar
  },
  {
    path: '/sidebar',
    name: 'Sidebar',
    component: Sidebar
  },
  {
    path: '/form',
    name: 'Form',
    component: Form
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

*/