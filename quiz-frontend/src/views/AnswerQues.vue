<template>
    <div>
        <p class="user-info" v-if="!token"> Login required!</p>
        <div class="question-answer" v-else>
            <article>
                <p>{{ count + 1 }}.{{ question.question }}</p>
                <form @submit.prevent="submitAnswer">
                    <input type="text" name="answer" v-model="answer">
                    <button>Submit Answer</button>
                </form>

                <div class="btn">
                    <button :disabled="prevDisable" @click="prevQues">Previous Question</button>
                    <p>{{count+1}}&nbsp;/&nbsp;{{questionsList.length}}</p>
                    <button :disabled="nextDisable" @click="nextQues">Next Question</button>

                </div>
                <router-link to='/create' @click.native="getMessages(blankMgs)">Create more...</router-link>
            </article>

        </div>
    </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {

    data() {
        return {
            answer: "",
            count: 0,
            message: 'No more question in this directions',
            blankMgs: ''
        };
    },

    computed: {
        ...mapState(['questionsList', 'token', 'user']),

        question() {
            return this.questionsList[this.count]
        },

        nextDisable() {
            return this.count == this.questionsList.length - 1 ? true : false
        },
        prevDisable() {
            return this.count == 0 ? true : false
        }

    },

    methods: {

        submitAnswer() {
            this.$store.dispatch('answerQuiz', { id: this.question.id, email: this.user.email, ans: this.answer })
        },

        nextQues() {
            this.questionsList.length - 1 > this.count ? this.count++ : ''
        },
        prevQues() {
            this.count > 0 ? this.count-- : ''
        },

        ...mapActions(['getMessages'])
    },




}
</script>

<style lang="scss" scoped>
button {
    background-color: #000;
    color: #fff;
    margin-right: 16px;
}

.user-info {
    height: 100vh;
    margin-top: 100px;
    padding: 0px 16px;
}

.question-answer {
    padding: 56px;
    height: 100vh;

    article {
        padding: 24px;
        height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: flex-start;

        p {
            font-weight: bold;
        }

        form {
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 24px 0px;

            input {
                padding: 2px 6px;
                margin: 0px 5px;
            }


        }

        .btn {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-top: 32px;

            button {
                background-color: #FB0204;
                padding: 2px;
                margin-right: 0px;
            }

            p{
                padding:0px 12px;
            }
        }

        a {
            margin-top: 56px;
        }
    }
}
</style>