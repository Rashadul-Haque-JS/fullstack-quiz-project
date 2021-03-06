const { Quizzes, Users, Questions } = require('../models/index')

const createQuestion = async (req, res, next) => {
    try {
        const { email, genre, question, answer } = req.body
        const user = await Users.findOne({ where: { email } })
        console.log('USER ' + user.id)
        const quizzes = await Quizzes.findAll({ where: { genre } })
        console.log('Quizess ' + quizzes)
        const matchedQuiz = quizzes.find(quiz => quiz.userId == user.id)
        console.log(matchedQuiz)

       await Questions.create({
            question,
            answer,
            quizId: matchedQuiz.id,
            userId: matchedQuiz.userId

        })

        const userId = user.id
        console.log('diamond '+ userId)
        const newQuesList = await Questions.findAll()

        res.status(200).json({ newQuesList })

        next()
    } catch (error) {
        res.status(400).json({ error })
        console.log(error)
    }
}

const allQuestions = async (req, res, next) => {
    try {
        const questionList = await Questions.findAll()
        res.status(200).json(questionList)
    } catch (error) {
        res.status(400).json({ error })
        console.log(error)
    }
}


const getFromUsers = async (req, res, next) => {

    try {
    const id = req.params.id
    console.log('ID '+ id)
        const question = await Questions.findOne({ where: { id } })

    res.json({question})

    } catch (error) {
        res.status(501).json(error)
    }
}

const question = async(req, res, next) => {

    try {
        const id = req.params.id
        await Questions.destroy({ where: { id } })
        const questionList = await Questions.findAll()
        res.json({questions:questionList,message: 'Question deleted' })

    } catch (error) {
        res.status(501).json(error)
    }
}

module.exports = { createQuestion, allQuestions, getFromUsers, question }