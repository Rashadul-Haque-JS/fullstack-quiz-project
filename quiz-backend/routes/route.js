const express = require('express')
const router = express.Router()

const { register, login } = require('../controllers/auth')
const { createQuiz, getAllGenres, quiz,updateQuiz } = require('../controllers/quiz')
const { createQuestion, allQuestions,getFromUsers,question } = require('../controllers/question')
const { answer } = require('../controllers/answer')
const {uploadImage} = require('../controllers/image')
const {staticData} = require('../controllers/static')


// Post
router.post('/register', register)

router.post('/login', login)

router.post('/createQuiz',uploadImage, createQuiz)

router.post('/createQuestion', createQuestion)

router.post('/answer', answer)

// Get
router.get('/allQuizGenres', getAllGenres)
router.get('/allQuestions',allQuestions )
router.get('/getFromUsers/:id', getFromUsers)
router.get('/staticData', staticData)


// Delete

router.delete('/quiz/:id', quiz)
router.delete('/question/:id', question)


// Update

router.patch('/updateQuiz', updateQuiz)


module.exports = router
