<template>
    <div class="wrapper">
        <p class="extra-info" v-if="!token"> Lgoin required</p>
        <div class="user" v-else>
            <div class="user-info">
                <figure>
                    <img src="../assets/avatar.png" alt="profile image">
                    <form @submit.prevent="">
                        <input type="file" name="photograpgh" accept="image/png">
                        <button>upload your photo</button>
                    </form>
                </figure>
                <section>
                    <h1>{{ user.name }}</h1>
                    <p>{{ user.email }}</p>
                </section>
                <section>
                    <p><strong>Scores</strong></p>
                    <p><strong>{{ user.score }}</strong></p>

                </section>
            </div>

            <h2>YOUR CREATIONS ↴</h2>
            <div class="user-creations">
                <router-link class="page-navigator" to='/create'>Create More</router-link>
                <section class="user-quiz">
                    <h3>Genres Of Quiz</h3>
                    <article v-for="(gen, idx) in userGenres" :key="idx">
                        <p>{{ idx+1 }}.{{ gen.genre }}</p>
                        <form @submit.prevent="deleteQuizz(gen.id)">
                            <button> delete </button>
                        </form>

                    </article>
                </section>
                <hr>
                <router-link class="page-navigator" to='/question'>Answer Quiz</router-link>
                <div class="ques-bolck">
                    <section class="user-ques">
                        <h3>Questions Of Genres</h3>
                        <article v-for="(question, idx) in myQuesList" :key="idx">
                        <p>{{ idx+1 }}.{{ question.question }}<span>answer ⇒{{ question.answer }}</span></p>
                        <form @submit.prevent="deleteQues(question.id)">
                            <button> delete </button>
                        </form>

                    </article>
                    </section>
                    <section class="take-ques">
                        <h3>Take one question from <router-link to="/question">Question list </router-link> and add in
                            yours own list</h3>

                        <form @submit.prevent="getOneQues">
                            <input type="text" placeholder="Add questions number" required maxlength="2" v-model="id">
                            <button>Get Question</button>
                        </form>

                    </section>
                </div>


            </div>
        </div>
    </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'
export default {
    name: 'memberProfile',
    data() {
        return {
            genreId: '',
            id: '',
            number: 1
        }
    },
    computed: {
        ...mapState(['user', 'myQuesList', 'token']),
        ...mapGetters(['userGenres','myQuesList'])
    },

    methods: {
        async getOneQues() {
            if (this.number < 2) {
                await this.$store.dispatch('fetchOneQues', this.id)
                this.number = this.number + 1
                console.log(this.number)
            } else {
                let mgs = 'Allowed once!'
                await this.$store.dispatch('getMessages', mgs)
            }
        },
        ...mapActions(['deleteQuizz', 'deleteQues'])
    }
}
</script>

<style lang="scss" scoped>
.wrapper {
    padding: 0px 40px;

    .extra-info {
        height: 100vh;
        margin-top: 100px;
    }

    .user {
        .user-info {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 32px 56px;

            figure {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;

                img {
                    width: 180px;
                    height: 180px;
                }

                form {
                    display: flex;
                    flex-direction: column;
                    padding: 24px;

                    input {
                        width: 200px;
                    }

                    button {
                        width: fit-content;
                        background-color: #000;
                        color: #fff;
                        padding: 2px 8px;
                        margin-top: 16px;
                    }
                }
            }

            section {

                h1,
                p {
                    text-align: center;
                    padding: 5px;

                    strong {
                        color: #FB0204;
                    }
                }
            }
        }

        hr {
            border-top: 1px solid #9EF8EE;
            width: 100%;
            margin: 24px 0px;
        }



        h2 {
            font-size: 1.1rem;
            padding: 40px;
        }

        .user-creations {
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            align-items: flex-start;
            padding: 24px;
            border: 1px solid #FB0204;
            margin-bottom: 100px;

            a {
                margin-bottom: 12px;
            }

            .user-quiz, .ques-bolck {
                h3{
                    padding:20px 0px;
                    text-decoration-line: underline;
                }
                article {
                    display: flex;
                    padding: 8px;

                    p {
                        text-transform: capitalize;
                        font-weight: bold;
                    }

                    form {
                        padding: 0px 12px;

                        button {
                            padding: 0px 4px;
                            border-radius: 4px;
                            font-size: .7rem;
                        }
                    }
                }
            }

            .ques-bolck {
                display: flex;
                justify-content: space-between;
                align-items: center;

                .take-ques{
                    width: 30%;
                    border-left: 2px dotted #FB0204;
                    padding-left: 16px;

                    form{
                        margin-top: 16px;
                    }
                }
            }
        }

    }
}
</style>