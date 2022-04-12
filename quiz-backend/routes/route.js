
const express = require('express')
const router = express.Router()

const { register, login } = require('../controllers/auth')
const {quiz} = require('../controllers/quiz')


router.post('/register', register)

router.post('/login', login)

router.post('/quiz', quiz)


module.exports = router 