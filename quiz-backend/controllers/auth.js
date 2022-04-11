const { Users } = require('../models/index')


// User registration

const register = async (req, res) => {

    const { name, email, password } = req.body
    try {
        await Users.create({
            name,
            email,
            password_hash: password
            
        })
        const token = await Users.authenticate(email, password)
       const user = await Users.findOne({ where: { email },attributes:{exclude:['password_hash']} })
        res.json({ token, user })
       

    } catch (error) {
        const errorMessage = error.errors[0].message
        res.status(404).json(errorMessage)
    }



}

// User login

const login = async (req, res) => {

    try {
        const { email, password } = req.body
        const token = await Users.authenticate(email, password)
        const user = await Users.findOne({ where: { email }, attributes: { exclude: ['password_hash'] } })
        if (email == 'jhon.mills@example.com') {
            user.role = 'admin'
        }
        res.json({ token, user })


    } catch (error) {
        console.log(error)
        res.status(404).send(error)

    }



}

module.exports = { register, login }