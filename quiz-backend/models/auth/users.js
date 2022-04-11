const { Model, DataTypes } = require('sequelize')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

module.exports = database => {
  class Users extends Model {


    static async authenticate(email, password) {
      const user = await Users.findOne({ where: { email } })
      if (!user) {
        throw new Error('Invalid Users name')
      }

      if (!bcrypt.compareSync(password, user.password_hash)) {
        throw new Error('Invalid password')
      }
      const payload = {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
        score: user.score
      }
      const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1d' })
      return token
    }


  }



  Users.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },


      password_hash: {
        type: DataTypes.STRING,
        allowNull: false,
        max: 64,
        min: 2

      },

      role: {
        type: DataTypes.STRING,
        enum: ['member', 'admin'],
        defaultValue: 'member',
        allowNull: false
      },


      score: {
        type: DataTypes.INTEGER,
        defaultValue: 0

      },




    },

    {
      sequelize: database,
      modelName: 'users',
      hooks: {
        beforeCreate(instance, options) {
          instance.password_hash = bcrypt.hashSync(instance.password_hash, 12)
        },

      },
      logging: false,
      timestamps: false
    }
  )

  return Users
}
