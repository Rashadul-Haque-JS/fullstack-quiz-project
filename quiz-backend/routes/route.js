const express = require('express')
const router = express.Router()

const { register, login } = require('../controllers/auth')
const { createQuiz, getAllGenres, quiz } = require('../controllers/quiz')
const { createQuestion, allQuestions,getFromUsers } = require('../controllers/question')
const { answer }  = require('../controllers/answer')
router.post('/register', register)

router.post('/login', login)

router.post('/createQuiz', createQuiz)

router.post('/createQuestion', createQuestion)

router.post('/answer', answer)

// Get requests
router.get('/allQuizGenres', getAllGenres)
router.get('/allQuestions',allQuestions )
router.get('/getFromUsers/:id', getFromUsers)


// Post

router.delete('/quiz/:id', quiz)


module.exports = router
