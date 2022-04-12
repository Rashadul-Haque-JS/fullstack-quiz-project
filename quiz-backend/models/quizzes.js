const { Model, DataTypes } = require('sequelize')

module.exports = database => {
  class Quizzes extends Model {
  }

  Quizzes.init(
    {
      genres: {
        type: DataTypes.STRING

      },

      user_name: {
        type: DataTypes.STRING

      },

      user_email: {
        type: DataTypes.STRING

      },
      user_role: {
        type: DataTypes.STRING,
        allowNull: false
      },

      image: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: true

      }

    },

    {
      sequelize: database,
      modelName: 'quizzes',
      logging: false,
      timestamps: true
    }
  )

  return Quizzes
}
