const express = require('express')
const router = express.Router()

const { register, login } = require('../controllers/auth')
const { createQuiz, getAllGenres } = require('../controllers/quiz')
const { createQuestion } = require('../controllers/question')
const { answer }  = require('../controllers/answer')
router.post('/register', register)

router.post('/login', login)

router.post('/createQuiz', createQuiz)

router.post('/createQuestion', createQuestion)

router.post('/answer', answer)

// Get requests
router.get('/allQuizGenres', getAllGenres)

module.exports = router
