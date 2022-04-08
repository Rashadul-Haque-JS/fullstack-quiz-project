const { Model, DataTypes } = require('sequelize')

module.exports = database => {
    class Quizzes extends Model { }

    Quizzes.init(
        {
            questions: {
                type: DataTypes.STRING,

            },
            image: {
                type: DataTypes.STRING,
                allowNull: false,
                defaultValue: true


            },
            author_name: {
                type: DataTypes.STRING,

            },

            author_email: {
                type: DataTypes.STRING,

            },
            author_as_admin: {
                type: DataTypes.BOOLEAN,
                allowNull: false,
                defaultValue: true


            },

            author_as_user: {
                type: DataTypes.BOOLEAN,
                allowNull: false,
                defaultValue: false


            },

            answer: {
                type: DataTypes.STRING,
                allowNull: false,
               


            },



        },

        {
            sequelize: database,
            modelName: 'Quizzes',
            logging: false,
            timestamps: false
        }
    )

    return Quizzes
}




