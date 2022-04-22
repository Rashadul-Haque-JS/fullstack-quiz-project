
const staticData = async (req, res, next)=>{
    const data = require('../database/quizzes.json')
    const genArray = []
    data.forEach(d => {
        genArray.push(d.genre)
    })
    await res.json(genArray)
    next()
}

module.exports = {staticData}