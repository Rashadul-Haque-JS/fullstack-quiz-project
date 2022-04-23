<template>
    <article class="item">
        <h1>
            {{ idx + 1 }}.&nbsp;{{ genre.genre }}
        </h1>
        <div class="form-delete">
            <form @submit.prevent="deleteQuizz(genre.id)">
                <button> delete </button>
            </form>
            <button @click="updateIt(genre.id)">update</button>

        </div>
        <form class="update-quiz" @submit.prevent="quizUpdate" v-if="isUpdate">
            <input type="text" v-model="update.newGenre" placeholder="new name of genre" required>
            <button>Ok</button>
        </form>

    </article>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    props: { genre: Object, idx: Number },
    data() {
        return {
            isUpdate: false,
            update: {
                id: "",
                newGenre: ""
            },
        }
    },
    methods: {

        async quizUpdate() {
            await this.$store.dispatch("updateQuizz", { id: this.update.id, newGenre: this.update.newGenre });
            this.isUpdate = false;
        },
        updateIt(number) {
            this.update.id = number
            this.isUpdate = true
        },

        ...mapActions(['deleteQuizz'])

    },
}
</script>

<style lang="scss" scoped>
.item {
    width: 240px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    border-radius: 10px;
    padding: 20px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);


     h1 {
        text-transform: capitalize;
        margin-top: 0px;
    }

    .form-delete{
        width: 100%;
        display: flex;
        justify-content: center;
        button{
            margin: 20px 8px;
        }
    }

    .update-quiz{
        button{
            background-color: #000;
            color:#fff;
        }
    }


}
</style>