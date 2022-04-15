
const { Quizzes, Users, Questions } = require('../models/index')

async function createQuestions() {


    await Users.create({
        name: 'Foo Bar',
        email: 'foo.bar@example.com',
        password_hash: 'password',
        role: 'admin'


    })

    await Quizzes.bulkCreate(require('./quizzes.json'))

    await Questions.bulkCreate(require('./quesions.json'))

    console.log('created .....questions')

}

createQuestions()