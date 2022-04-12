const { Users, Questions} = require('../models/index')

const answer = async (req, res) => {
    try {
        const {id, email, ans } = req.body
        const user = await Users.findOne({ where: { email } })
        const ques = await Questions.findOne({where:{id}})
        
        if (ques.answer == ans) {
            user.increment('score', { by: 10 })
            res.json({ message: 'Correct!' })
        } else {
            res.json({ message: 'Incorrect!' })
        }
        
    } catch (error) {
        res.status(400).json({ error })
        console.log(error)
    }
}

// const 

module.exports = {answer}