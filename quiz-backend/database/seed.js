
const { Quizzes, Users} = require('../models/index')

async function createQuestions() {
        
    
        await Users.create({
            name: 'Jhon Mills',
            email: 'jhon.mills@example.com',
            password_hash: '$2a$12$hzEFwWG/qG2On9CTPBE.z.Q6cnLr46uZJ8LhSEvBLccc901zdDGXK',
            role:'admin'
           

        })
    
        await Quizzes.bulkCreate(require('./quiz.json'))
       
        console.log('created .....questions')

}

createQuestions()