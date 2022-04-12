const { Model, DataTypes } = require('sequelize')

module.exports = database => {
    class Quizzes extends Model { }

    Quizzes.init(
        {
            question: {
                type: DataTypes.STRING,

            },
           
            author_name: {
                type: DataTypes.STRING,

            },

            author_email: {
                type: DataTypes.STRING,

            },
            author_role: {
                type: DataTypes.STRING,
                allowNull:false,
            },

            image: {
                type: DataTypes.STRING,
                allowNull: false,
                defaultValue: true


            },
            answer: {
                type: DataTypes.STRING,
                allowNull: false
            }
            
            
        },

        {
            sequelize: database,
            modelName: 'quizzes',
            logging: false,
            timestamps: false
        }
    )

    return Quizzes
}




