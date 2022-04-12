
const { Quizzes, Users, Questions } = require('../models/index')

async function createQuestions() {


    await Users.create({
        name: 'Jhon Mills',
        email: 'jhon.mills@example.com',
        password_hash: '$2a$12$hzEFwWG/qG2On9CTPBE.z.Q6cnLr46uZJ8LhSEvBLccc901zdDGXK',
        role: 'admin'


    })

    await Quizzes.create({
        genres: "Animals",
        user_name: "Jhon Mills",
        user_email: "jhon.mills@example.com",
        user_role: "admin",
        image: "animals",
        userId: "1"
    })

    await Questions.bulkCreate(require('./quesions.json'))

    console.log('created .....questions')

}

createQuestions()