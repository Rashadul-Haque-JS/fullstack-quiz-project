const { Users, Questions} = require('../models/index')

const answer = async (req, res) => {
    try {
        const {id, email, ans } = req.body
        const user = await Users.findOne({ where: { email },attributes: { exclude: ['password_hash'] } })
        const ques = await Questions.findOne({where:{id}})
        
        if (ques.answer == ans) {
            await user.increment('score', { by: 10 })
            const updatedUser = await Users.findOne({ where: { email },attributes: { exclude: ['password_hash'] } })
        res.json({user:updatedUser, message: 'Correct!' })
        } else {
            res.json({user:user, message: 'Incorrect!' })
        }
        
    } catch (error) {
        res.status(400).json({ error })
        console.log(error)
    }
}



module.exports = {answer}