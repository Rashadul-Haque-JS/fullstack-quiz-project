import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import Login from '@/views/LoginView.vue'
import Register from '@/views/RegisterView.vue'
import Quiz from '@/views/QuizView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },

  {
    path: '/login',
    name: 'login',
    component: Login
  },

  {
    path: '/register',
    name: 'register',
    component: Register
  },

  {
    path: '/quiz',
    name: 'Quiz',
    component: Quiz
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
