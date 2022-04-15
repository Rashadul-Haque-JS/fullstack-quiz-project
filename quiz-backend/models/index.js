const Sequelize = require('sequelize')
const setupQuizzes = require('./quizzes')
const setupUsers = require('./auth/users')
const setupQuestions = require('./questions')

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database/quiz.sqlite'
})


const Quizzes = setupQuizzes(sequelize)
const Users = setupUsers(sequelize)
const Questions = setupQuestions(sequelize)

Users.hasMany(Quizzes)
Quizzes.belongsTo(Users)

Quizzes.hasMany(Questions)
Questions.belongsTo(Quizzes)

Users.hasMany(Questions)
Users.belongsToMany(Questions, {through: 'Quizzes'})

module.exports = {  Quizzes, Users, Questions}
