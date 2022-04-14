
const { Quizzes, Users, Questions } = require('../models/index')

async function createQuestions() {


    await Users.create({
        name: 'Foo Bar',
        email: 'foo.bar@example.com',
        password_hash: 'password',
        role: 'admin'


    })

    await Quizzes.create({
        genres: "Animals",
        user_name: "Foo Bar",
        user_email: "foo.bar@example.com",
        user_role: "admin",
        image: "animals",
        userId: "1"
    })

    await Questions.bulkCreate(require('./quesions.json'))

    console.log('created .....questions')

}

createQuestions()