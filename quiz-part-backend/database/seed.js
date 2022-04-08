
const { Quizzes } = require('../models/index')

async function createQuestions() {
    
        await Quizzes.create({
            questions: 'what is A?',
            author_name:'he',
            image: 'hello',
            answer: 'alfb.',
          

        })
        console.log('created .....questions')

}
createQuestions()