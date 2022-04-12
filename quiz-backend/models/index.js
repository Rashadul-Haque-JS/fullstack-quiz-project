
const Sequelize = require('sequelize')
const setupQuizzes = require('./quizzes')
const setupUsers = require('./auth/users')




const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './database/quiz.sqlite'
})
  


const Quizzes = setupQuizzes(sequelize)
const Users = setupUsers(sequelize)

Users.hasMany(Quizzes,{ foreignKey: 'authorId', sourceKey:'id' })
Quizzes.belongsTo(Users,{ foreignKey: 'authorId', targetKey:'id' })



module.exports = {  Quizzes, Users }