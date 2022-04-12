const { Quizzes, Users } = require('../models/index')

const quiz = async (req, res) => {

    const { question, email, image, answer } = req.body
    console.log(req.body)
    const user = await Users.findOne({ where: { email } })
    console.log(user)

    try {
        await Quizzes.create({
            question,
            author_name: user.name,
            author_email: user.email,
            author_role: user.role,
            image,
            answer,
            authorId: user.id
        })


        res.status(200).json('Quiz created!')

    } catch (error) {
        console.log(error)
    }
}

module.exports = { quiz }