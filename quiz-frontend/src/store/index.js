import Vue from 'vue'
import Vuex from 'vuex'

import * as API from '@/api'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: '',
    user: {},
    genresList: [],
    genres: {},
    questionsList: [],
    questions: {},
    staticGenArr:[],
    message: "",
    errorMessage: '',
  },

  mutations: {
    getToken(state, payload) {
      state.token = payload
    },

    saveUser(state, payload) {
      state.user = { ...payload }
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

    saveStatic(state,staticGen){
      state.staticGenArr =staticGen
    },

    removeGenList(state) {
      state.genresList = []
    },

    removeQuesList(state) {
      state.questionsList = []
    },

    saveNewGenre(state, payload) {
      state.genresList.push(payload)
    },

    saveQuestions(state, questions) {
      for (let question of questions) {
        if (!state.questionsList.find((obj) => obj.id === question.id)) {
          state.questionsList.push({
            ...question
          })
        }
        Vue.set(state.questions, question.id, question)
      }
    },

    saveMessage(state, mgs) {
      state.message = mgs
    },

    saveErrorMgs(state, mgs) {
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

    async makeQuiz(context, formData) {
      try {
        const response = await API.createQuiz(formData)
        context.commit('saveNewGenre', response.data.newGenre)
        context.commit('saveMessage', response.data.message)
      } catch (error) {
        context.commit('saveErrorMgs', error)
        console.log(error)
      }
    },

    async fetchGenres(context) {
      try {
        if (context.state.genresList.length < 1) {
          const response = await API.getAllGenres()
          context.commit('saveGenres', response.data)
          console.log(response.data)
        }
      } catch (error) {
        context.commit('saveErrorMgs', error)
      }

    },

    async fetchStatic(context) {
      if (context.state.staticGenArr.length < 1) {
        const response = await API.getStatic()
        context.commit('saveStatic', response.data)
     }

    },

    async fetchQuestions(context) {
      try {
        if (context.state.questionsList.length < 1) {
          const response = await API.getAllQuestions()
          context.commit('saveQuestions', response.data)
        }
      } catch (error) {
        context.commit('saveErrorMgs', error)
      }

    },

    async createQues(context, { email, genre, question, answer }) {
      try {
        const response = await API.addQuestion(email, genre, question, answer)
        context.commit('removeQuesList')
        context.commit('saveQuestions', response.data.newQuesList)

        console.log(response)
      } catch (error) {
        context.commit('saveErrorMgs', error)
      }
    },

    async answerQuiz(context, { id, email, ans }) {
      try {
        const response = await API.answerQuestions(id, email, ans)
        context.commit('saveUser', response.data.user)
        context.commit('saveMessage', response.data.message)
      }
      catch (error) {
        context.commit('saveErrorMgs', error)
      }
    },


    async fetchOneQues(context, id) {
      try {
        const response = await API.takeInOne(id)
        const data = response.data.question
        if (data) {
          context.getters.myQuesList.push(data)
        } else {
          context.commit('saveMessage', response.data.message)
        }

        console.log(response.data.question)
      }
      catch (error) {
        context.commit('saveErrorMgs', error)
      }
    },

    async deleteQuizz(context, id) {
      try {
        const response = await API.delQuiz(id)
        context.commit('removeGenList')
        context.commit('saveGenres', response.data.genres)
      } catch (error) {
        context.commit('saveErrorMgs', error)
      }
    },

    async deleteQues(context, id) {
      try {
        const response = await API.delQuestion(id)
        context.commit('removeQuesList')
        context.commit('saveQuestions', response.data.questions)
        context.commit('saveMessage', response.data.message)
      } catch (error) {
        context.commit('saveErrorMgs', error)
      }
    },


    async updateQuizz(context, { id, newGenre}) {
      try {
        const response = await API.updateQuizz(id,newGenre)
        context.commit('removeGenList')
        context.commit('saveGenres',response.data.genres)
        context.commit('saveMessage', response.data.message)
      } catch (error) {
          context.commit('saveErrorMgs', error)
      }
    },

    getMessages(context, mgs) {
      context.commit('saveMessage', mgs)
    },

    removeMessages(context) {
      context.commit('delMessages')
    }


  },

  getters: {
    userGenres(state) {
      const userGenres = []
      const genres = state.genresList.filter(gen => gen.userId == state.user.id)
      genres.forEach(gen => {
        userGenres.push(gen)
      })
      return userGenres
    },

    myQuesList(state) {
      const userQuestions = []
      const ques = state. questionsList.filter(que => que.userId == state.user.id)
      ques.forEach(q => {
        userQuestions.push(q)
      })
      return userQuestions
    },

    userRole:(state)=> state.user.role

  },

  modules: {
  }
})
