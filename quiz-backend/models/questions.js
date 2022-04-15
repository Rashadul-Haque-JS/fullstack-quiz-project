const { Model, DataTypes } = require('sequelize')

module.exports = database => {

  class Questions extends Model {
  }

  Questions.init(
    {
      question: {
        type: DataTypes.STRING,
        allowNull: false
      },

      answer: {
        type: DataTypes.STRING,
        allowNull: false
      }


    },

    {
      sequelize: database,
      modelName: 'questions',

      logging: false,
      timestamps: false
    }
  )

  return Questions
}
