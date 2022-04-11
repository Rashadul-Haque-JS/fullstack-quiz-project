
const { Quizzes,  Users } = require('../models/index')

async function modelsSetup() {

    await Quizzes.sync({ force: true })
    await Users.sync({ force: true })

    console.log('Done!')
}

modelsSetup()