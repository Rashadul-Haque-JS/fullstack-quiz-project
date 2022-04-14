<template>
    <div>
    <section>
        <p>Your scores: {{scores}}</p>
    </section>
    <div class="answer-quiz">
        <article>

        </article>
    </div>
    <div class="create-quiz">
        <form @submit.prevent="createQuiz">
        <input type="text" name="genres" placeholder="Genres" v-model="quiz.genres">
        </form>
    </div>
    </div>
</template>

<script>
    export default {
         data() {
    return {
        quiz:{
            genres:'',
            image:''
        }
      
    };
  },
    }
</script>

<style lang="scss" scoped>

</style>