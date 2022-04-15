const { Quizzes, Users, Questions } = require('../models/index')

const createQuestion = async (req, res) => {
    try {
        const { email, genre, question, answer } = req.body
        const user = await Users.findOne({ where: { email } })
        console.log('USER '+ user.id)
        const quizzes = await Quizzes.findAll({ where: { genre } })
        console.log( 'Quizess '+quizzes)
        const matchedQuiz = quizzes.find(quiz => quiz.userId == user.id)
        console.log(matchedQuiz)

        const resp = await Questions.create({
            question,
            answer,
            quizId: matchedQuiz.id,
            userId: matchedQuiz.userId

        })

        res.status(200).json({ resp })


    } catch (error) {
        res.status(400).json({ error })
        console.log(error)
    }
}

// const 

module.exports = { createQuestion }