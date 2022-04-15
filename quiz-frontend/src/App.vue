<template>
  <div id="app">
    <PagesNav :user="user" :token="token" />
    <ErrPage v-if = "message || errorMessage" />
    <router-view />
    <PagesFooter />
  </div>
</template>
<script>
import PagesNav from "@/components/PagesNav.vue";
import PagesFooter from "@/components/PagesFooter.vue";
import ErrPage from "@/components/ErrorsPages.vue";
import { mapState } from 'vuex'
export default {
  components: {
    PagesNav,
    PagesFooter,
    ErrPage
  },

  computed: {
    ...mapState(['user', 'token', 'message', 'errorMessage']),

   

  },

  mounted() {
    this.$store.dispatch('fetchGenres')
  }

}
</script>
<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500&family=Rubik+Moonrocks&display=swap');

* {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
  font-family: 'Montserrat', sans-serif;
}

body {
  background: #DFFF9B;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}
</style>
