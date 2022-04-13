import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:8000/api'


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

export async function registerAccount(payload) {
  axios.post('/register', payload)
}

export async function createQuiz(genres, email, image) {
    axios.post('/createQuiz', {
        genres, email, image
    })
}

