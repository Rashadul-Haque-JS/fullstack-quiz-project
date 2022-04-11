const { Users } = require('../models/index')


// User registration

const register = async (req, res) => {

    const { name, email, password } = req.body
    try {
        const user = await Users.create({
            name,
            email,
            password_hash: password
            
        })
        const token = await Users.authenticate(email, password)
       const guest = await Users.findOne({ where: { email },attributes:{exclude:['password_hash']} })
        res.json({ token, guest })
       

    } catch (error) {
        const err = error.errors
        res.json(err)
    }



}

// User login

const login = async (req, res) => {

    try {
        const { email, password } = req.body
        const token = await Users.authenticate(email, password)
        const user = await Users.findOne({ where: { email },attributes:{exclude:['password_hash']} })
        res.json({ token, user })


    } catch (error) {
        error.message = 'Wrong password!'
        res.status(404).send(error.message)

    }



}

module.exports = { register, login }