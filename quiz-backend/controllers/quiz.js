const { Quizzes, Users} = require('../models/index')

const createQuiz = async (req, res, next) => {
    try {
        const { genre, image, email } = req.body
    
    const user = await Users.findOne({ where: { email } })
    const genExistList = await Quizzes.findAll({ where: { genre }, raw: true })
    const genExistBool = genExistList.some(ob => ob.user_email == email)

 
        if (!genExistBool) {
           const newGenre = await Quizzes.create({
                genre,
                user_name: user.name,
                user_email: user.email,
                user_role: user.role,
                image,
                userId: user.id
            })

            res.json({newGenre:newGenre, message: 'Quiz created!' })
            next()
        } else {
            res.json({ message: 'You have created this genre, create questions instead!' })
            next()
        }
    } catch (error) {
        res.status(501).json({ error:'something wrong!' })
        next()
    }
}

const getAllGenres = async (req, res, next)=>{
    try{
        const genres = await Quizzes.findAll()
        res.json(genres)
    } catch (error) {
        res.status(501).json(error)
    }
}





module.exports = { createQuiz, getAllGenres }