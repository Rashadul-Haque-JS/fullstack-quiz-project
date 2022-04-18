import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import Login from '@/views/LoginView.vue'
import Register from '@/views/RegisterView.vue'
import Create from '@/views/CreateQues.vue'
import Question from '@/views/AnswerQues.vue'
import Profile from '@/views/MemberProfile.vue'

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
    path: '/create',
    name: 'Create',
    component: Create
  },

  {
    path: '/question',
    name: 'question',
    component: Question
  },

  {
    path: '/profile',
    name: 'profile',
    component: Profile
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
routes})

export default router
