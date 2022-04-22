<template>
  <div class="home">
   <header class="main-block" >
    <img
        src="../assets/quiz-banner.png"
        alt="page-banner"
      >
      </header>
      <main>
      <div class="headings">
      <h1>CREATE YOUR OWN QUIZ BASE</h1>
      <h1>🤔</h1>
      <h1>ANSWER FOR OTHER'S QUESTIONS</h1>
      </div>
      <section class="sub-headings">
      <h2>Quizzes genres ↴</h2>
      <p>(User can create more genres)</p>
      </section>
      <div class="genre-image" v-if="!token">
      <router-link to='/login' v-for="(genre,index) in genres" :key="index">
        <Card :genre="genre"/>
      </router-link>
      </div>

      <div class="genre-image" v-else>
      <router-link to='/question' v-for="(genre,index) in genres" :key="index">
        <Card :genre="genre"/>
      </router-link>
      </div>
      </main>
  </div>
</template>

<script>
// @ is an alias to /src
import Card from '../components/GenreCard.vue'
import {mapState} from 'vuex'
export default {
  name: 'HomeView',
  components:{
    Card,
  },

  computed:{
    ...mapState(['genres', 'token'])
  }

}
</script>
<style lang="scss" scoped>
.home{
  width:100%;

  img{
    width:100%
  }
  main{
    .headings{
      display:flex;
      flex-direction:column;
      justify-content:space-around;
      align-items:center;
      margin-top:48px;
      h1{
        color:#FB0204;
        font-family: 'Rubik Moonrocks', cursive;
        padding:4px;
      }
    }
    .genre-image{
      display:grid;
      grid-template-columns: repeat(2,1fr);
      grid-gap:40px;
      place-items:center;
      padding-bottom:150px;
      margin-top:56px;
    }
    .sub-headings{
      padding:40px;
      h2,p{
        text-align:center;
        padding:5px;
      }
    }
  }
}
</style>