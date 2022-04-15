const { Users } = require('../models/index')

// User registration

const register = async (req, res) => {

    const { name, email, password } = req.body
    const userExist = await Users.findOne({where:{email}})
    try {
        if (email !== 'foo.bar@example.com' && !userExist) {
            await Users.create({
                name,
                email,
                password_hash: password,
                role: 'member'
            
            })

            const token = await Users.authenticate(email, password)
            const user = await Users.findOne({ where: { email },attributes:{exclude:['password_hash']} })
             res.json({message: 'User created successfully!', token, user })
        } else {
            // throw new Error ('Forbidden!')
            res.status(403).json('You entered reserved or existing email!')
        }
       
       

    } catch (error) {
    //   console.log(error)
        res.status(400).json(error)
    }



}

// User login

const login = async (req, res, next) => {

    try {
        const { email, password } = req.body
        const token = await Users.authenticate(email, password)
        const user = await Users.findOne({ where: { email }, attributes: { exclude: ['password_hash'] } })
        if (email == 'foo.bar@example.com') {
            user.role = 'admin'
        }
        res.json({ token, user })
        next()
    } catch (error) {
      
        console.log({ error})
        res.status(404).json({ error:'User not found!' })

    }



}

module.exports = { register, login }