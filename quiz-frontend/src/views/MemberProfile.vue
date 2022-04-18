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
                    <ol>
                        <li v-for="(genre, idx) in userGenres" :key="idx">
                            {{ genre }}
                        </li>
                    </ol>
                </section>
                <hr>
                <router-link class="page-navigator" to='/question'>Answer Quiz</router-link>
                <div class="ques-bolck">
                    <section class="user-ques">
                        <h3>Questions Of Genres</h3>
                        <ol>
                            <li v-for="(question, idx) in myQuesList" :key="idx">
                                {{ question.question }} <span>answer ⇒{{ question.answer }}</span>
                            </li>
                        </ol>
                    </section>
                    <section>
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
import { mapState, mapGetters } from 'vuex'
export default {
    name: 'memberProfile',
    data() {
        return {
            id: '',
            number: 1
        }
    },
    computed: {
        ...mapState(['user', 'myQuesList', 'token']),
        ...mapGetters(['userGenres'])
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
        }
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

            .ques-bolck {
                display: flex;
                justify-content: space-evenly;

                section {
                    padding: 24px;

                    h3 {
                        padding: 24px 0px;
                    }

                    ol {
                        width: fit-content;
                        display: block;

                        li {
                            span {
                                font-weight: bold;
                                padding: 0px 12px;
                            }
                        }
                    }

                    a {
                        width: fit-content;
                        color: #FB0204;
                        padding: 0px 8px;
                        margin-bottom: 24px;

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
        }

    }
}
</style>