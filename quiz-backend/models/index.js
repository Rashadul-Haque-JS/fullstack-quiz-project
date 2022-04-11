
const Sequelize = require('sequelize')
const setupQuizzes = require('./quizzes')
const setupUsers = require('./auth/users')




const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './database/quiz.sqlite'
})
  


const Quizzes = setupQuizzes(sequelize)
const Users = setupUsers(sequelize)

Users.hasMany(Quizzes)
Quizzes.belongsTo(Users)



module.exports = {  Quizzes, Users }