
const { Quizzes} = require('../models/index')

async function createQuestions() {
        await Quizzes.create({
            questions: "What is Sweden's capital city?",
            author_name: 'Jhon Mills',
            author_email: 'jhon.mills@example.com',
            image: 'Blob',
            answer: "Stockholm",
           

        })
    
       
        console.log('created .....questions')

}
createQuestions()