
const { Quizzes, Users, Questions } = require('../models/index')

async function createQuestions() {


    await Users.create(require('./admin.json'))

    await Quizzes.bulkCreate(require('./quizzes.json'))

    await Questions.bulkCreate(require('./quesions.json'))

    console.log('created .....questions')

}

createQuestions()