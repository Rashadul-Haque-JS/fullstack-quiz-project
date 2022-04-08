
const Sequelize = require('sequelize')
const setupQuizzes = require('./quizzes')


const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './database/quiz.sqlite'
})
  


const Quizzes = setupQuizzes(sequelize)




module.exports = {  Quizzes}