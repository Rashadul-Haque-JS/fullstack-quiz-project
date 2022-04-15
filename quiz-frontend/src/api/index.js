import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:5000/api'


//USER START

export function saveToken(token) {
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}

export async function login(email, password) {
  return await axios.post('/login', {
    email,
    password
  })
}

export async function registerUser(newUser) {
 return await axios.post('/register', newUser)
}

export async function createQuiz(genre, image, email) {
  return await  axios.post('/createQuiz', {
        genre, image, email 
    })
}

export async function addQuestion(genre, question, answer) {
  return await axios.post('/createQuestion', {
    genre, question, answer
  })
}

export async function getAllGenres() {
  return await axios.get('/allQuizGenres')
}

