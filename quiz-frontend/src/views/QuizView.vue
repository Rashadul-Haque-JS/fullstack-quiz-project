<template>
    <div class="wrapper">
        <!-- <section v-if="done">
            <p>Your scores: {{ scores }}</p>
        </section> -->
        <div class="quiz-container">
            <div class="answer-quiz" v-if="answerQuiz">
                <article>

                </article>
            </div>
            <div class="create-quiz-ques" v-else>
                <div class="create-quizzes">
                    <h1>Create your Quiz</h1>
                    <p>*The same genre? - Nope!</p>
                    <form @submit.prevent="createQuiz">
                        <input type="text" name="genre" placeholder="Genre" v-model="quiz.genre">
                        <input type="file" name="image">
                        <button>Create Quiz</button>
                    </form>
                </div>

                <div class="create-questions">
                    <h1>Create questions for your quiz </h1>
                    <p>* How many? - Unlimited!</p>
                    <form @submit.prevent="createQues">
                        <input type="text" name="genre" placeholder="name of your genre" v-model="ques.genre">
                        <input type="text" name="question" placeholder="your question" v-model="ques.question">
                        <input type="text" name="answer" placeholder="correct answer of question" v-model="ques.answer">
                        <button>Create Question</button>
                    </form>
                </div>
            </div>



        </div>

    </div>
</template>

<script>
import { mapState } from "vuex";
export default {
    data() {
        return {
            quiz: {
                genre: '',
                image: ''
            },
            ques: {
                genre: '',
                question: '',
                answer: ''
            },
            answerQuiz: false,


        };
    },

    computed: {
        ...mapState(['user', 'okMgs', 'errorMgs']),


    },

    methods: {

        async createQuiz() {
            let imgs = 'comming';
            await this.$store.dispatch('makeQuiz', { genre: this.quiz.genre, image: imgs, email: this.user.email })
        }
    },


}
</script>

<style lang="scss" scoped>
.wrapper {
    height: 100vh;

    .quiz-container {
        .create-quiz-ques {
            display: flex;
            justify-content: space-around;
            padding: 50px;

            .create-quizzes,
            .create-questions {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;

                h1 {
                    font-size: 1.4rem;
                    text-align: center;
                    padding: 40px 0px 10px 0px;
                    color: #FB0204;
                    font-family: 'Rubik Moonrocks', cursive;
                }

                p {

                    padding-bottom: 24px;
                }


                form {
                    width: 400px;
                    height: 250px;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    padding: 20px;

                    label {
                        font-weight: bold;
                    }

                    input,
                    button {
                        padding: 4px 20px;
                        border-radius: 5px;
                        border: none;
                        text-align: center;
                    }

                    button {
                        background: #000;
                        color: #fff;
                        text-align: center;
                    }

                }
            }


        }
    }
}
</style>