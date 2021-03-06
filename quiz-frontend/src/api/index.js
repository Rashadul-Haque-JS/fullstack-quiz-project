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

export async function createQuiz(formData) {
  return await  axios.post('/createQuiz', formData)
}

export async function addQuestion(email,genre, question, answer) {
  return await axios.post('/createQuestion', {
    email, genre, question, answer
  })
}

export async function answerQuestions(id, email, ans) {
  return await axios.post('/answer', {
    id, email, ans
  })
}

// Get
export async function getAllGenres() {
  return await axios.get('/allQuizGenres')
}

export async function getStatic() {
  return await axios.get('/staticData')
}

export async function getAllQuestions() {
  return await axios.get('/allQuestions')
}

export async function takeInOne(id) {
  return await axios.get(`/getFromUsers/${id}`)
}


export async function delQuiz(id) {
  return await axios.delete(`/quiz/${id}`)
}

export async function delQuestion(id) {
  return await axios.delete(`/question/${id}`)
}

export async function updateQuizz(id, newGenre) {
  return await axios.patch('/updateQuiz', { id , newGenre})
}








