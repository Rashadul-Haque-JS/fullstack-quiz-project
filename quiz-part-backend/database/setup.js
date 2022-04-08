
const { Quizzes} = require('../models/index')

async function modelsSetup(){

    await Quizzes.sync({force:true})

    console.log('Done!')
}

modelsSetup()