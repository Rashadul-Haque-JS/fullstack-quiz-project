const { Quizzes, Users} = require('../models/index')

const createQuiz = async (req, res) => {
    try {
    const { genres, email, image } = req.body
    const user = await Users.findOne({ where: { email } })
    const genExistList = await Quizzes.findAll({ where: { genres }, raw: true })
    const genExistBool = genExistList.some(ob => ob.user_email == email)

 
        if (!genExistBool) {
            await Quizzes.create({
                genres,
                user_name: user.name,
                user_email: user.email,
                user_role: user.role,
                image,
                userId: user.id
            })
            res.status(200).json('Quiz created!')

        } else {
            res.status(400).json('You have created this genres, create questions instead!')

        }
    } catch (error) {
        console.log(error)
    }
}

module.exports = { createQuiz }