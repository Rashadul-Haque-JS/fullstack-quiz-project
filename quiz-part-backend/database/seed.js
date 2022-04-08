
const { Quizzes } = require('../models/index')

async function createQuestions() {
    
        await Quizzes.create({
            questions: 'what is A?',
            author_name:'he',
            image: 'hello',
          

        })
        console.log('created .....questions')

}
createQuestions()