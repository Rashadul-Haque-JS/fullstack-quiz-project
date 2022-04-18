<template>
    <div class="wrapper">
        <div class="quiz-container">
            <div class="create-quiz-ques">
                <div class="create-quizzes">
                    <h1>Create your Quiz</h1>
                    <p>*The same genre? - Nope!</p>
                    <hr>
                    <form @submit.prevent="createQuiz">
                        <input type="text" name="genre" placeholder="Genre" @change="inputStageOnChange" v-model="quiz.genre">
                        <input type="file" name="image">
                        <button>Create Quiz</button>
                    </form>
                </div>

                <div class="create-questions">
                    <h1>Create questions for your quiz </h1>
                    <p>* How many? - Unlimited!</p>
                    <hr>
                    <form @submit.prevent="createQuestion">
                        <select name="genre" id="genre" required v-model="ques.genre">
                            <option value="">Select genre from your list</option>
                            <option v-for="genre in userGenres" :key="genre" :value="genre">
                                {{ genre }}
                            </option>
                        </select>
                        <input type="text" name="question" placeholder="your question" v-model="ques.question">
                        <input type="text" name="answer" placeholder="correct answer of question" v-model="ques.answer">
                        <button>Create Question</button>
                    </form>
                </div>
            </div>
            <router-link to='/question' @click.native="getMessages(blankMgs)">Answer Quiz</router-link>
        </div>

    </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
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
            blankMgs: ''
        };
    },

    computed: {
        ...mapState(['user', 'okMgs', 'errorMgs']),
        ...mapGetters(['userGenres']),


    },

    methods: {

        async createQuiz() {
            let imgs = 'comming';
            await this.$store.dispatch('makeQuiz', { genre: this.quiz.genre, image: imgs, email: this.user.email })
        },

        async createQuestion() {
            await this.$store.dispatch('createQues', { email: this.user.email, genre: this.ques.genre, question: this.ques.question, answer: this.ques.answer })
        },

        inputStageOnChange() {
            this.quiz.genre = this.quiz.genre.toLowerCase()
        },
    },
}
</script>

<style lang="scss" scoped>
.wrapper {
    height: 100vh;

    .quiz-container {
        padding:0px 16px;
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

                hr {
                    border-top: 1px solid black;
                    width: 400px;
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

                    select,
                    input,
                    button {
                        padding: 6px 20px;
                        border-radius: 2px;
                        border: none;
                        text-align: center;
                    }

                    button {
                        background: #FB0204;
                        color: #fff;
                        text-align: center;
                    }

                    input,
                    select {
                        background-color: #000;
                        color: #fff;
                    }

                }
            }


        }
    }
}
</style>