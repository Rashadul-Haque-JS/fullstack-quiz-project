import Vue from 'vue'
import Vuex from 'vuex'

import * as API from '@/api'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: '',
    user:{},
  },
  
  mutations: {
    getToken(state,payload) {
      state.token = payload
    },

    saveUser(state, payload) {
      state.user= {...payload}
    },

    logout(state) {
      state.token = ''
    }
  },

  actions: {

   async saveAuth(context, {email, password}) {
      try {
        const response = await API.login(email, password)
        await API.saveToken(response.data.token)
        context.commit('getToken', response.data.token)
        context.commit('saveUser', response.data.user)
        this.$router.push("/");
      } catch (error) {
        console.log(error)
      }
    },

    logout(context) {
      context.commit('logout')
    }
  },

  getters: {
  },

  modules: {
  }
})
