
const { Quizzes,  Users, Questions } = require('../models/index')

async function modelsSetup() {

    await Quizzes.sync({ force: true })
    await Users.sync({ force: true })
    await Questions.sync({ force: true })

    console.log('Done!')
}

modelsSetup()