<template>
  <div id="app">
    <PageHeader :user="user" :token="token"/>
    <router-view/>
  </div>
</template>
<script>
import PageHeader from "@/components/PageHeader.vue";
import {mapState} from 'vuex'
    export default {
      components:{
        PageHeader,
      },
    
    computed:{
            ...mapState(['user', 'token'])
        },

  }
</script>
<style lang="scss">

*{
   margin:0px;
  padding: 0px;
  box-sizing:border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}


</style>
