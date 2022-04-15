import Vue from 'vue'
import Vuex from 'vuex'

import * as API from '@/api'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: '',
    user: {},
    genresList: [],
    genres:{},
    genresInit: ['animal', 'history', 'sports', 'tech', 'country', 'movie'],
    message: "",
    errorMessage:''
  },
  
  mutations: {
    getToken(state,payload) {
      state.token = payload
    },

    saveUser(state, payload) {
      state.user= {...payload}
    },

    logout(state) {
      state.token = ""
      state.user = {}
    },

    saveGenres(state, genres) {
      for (let genre of genres) {
        if (!state.genresList.find((topic) => topic.id === genre.id)) {
          state.genresList.push({
            ...genre
          })
        }
        Vue.set(state.genres, genre.id, genre)
      }
    },

    saveMessage(state, mgs){
      state.message = mgs
    },

    saveErrorMgs(state, mgs){
      state.errorMessage = mgs
    },

    delMessages(state) {
      state.message = ""
      state.errorMessage = ""
    },
  },

  actions: {

    async saveAuth(context, { email, password }) {
      try {
        const response = await API.login(email, password)
        API.saveToken(response.data.token)
        context.commit('getToken', response.data.token)
        context.commit('saveUser', response.data.user)
        context.commit('delMessages')
      
      } catch (error) {
        context.commit('saveErrorMgs', error.response.data.error)
      }
    },

    async signup(context, newUser) {
      try {
        const response = await API.registerUser(newUser)
        API.saveToken(response.data.token)
        context.commit('getToken', response.data.token)
        context.commit('saveUser', response.data.user)
        context.commit('delMessages')
      } catch (error) {
        context.commit('saveErrorMgs', error)
        console.log('ERROR_IS ' + error)
      }
      
    },

    logout(context) {
      context.commit('logout')
      context.commit('delMessages')
    },

    async makeQuiz(context, { genre, image, email }) {
      try {
        const response = await API.createQuiz(genre, image, email)
        context.commit('saveMessage', response.data.message)
      } catch (error) {
        context.commit('saveErrorMgs', error)
        console.log(error)
      }
    },

    async fetchGenres(context) {
      try {
        if (this.state.genresList.length < 1) {
          const response = await API.getAllGenres()
          context.commit('saveGenres', response.data)
          console.log(response.data)
        }
      } catch (error) {
        context.commit('saveErrorMgs', error)
      }

    },

  
  },

  getters: {
  },

  modules: {
  }
})
