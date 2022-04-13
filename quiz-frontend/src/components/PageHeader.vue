<template>
    <div>
    <nav>
      <router-link to="/">Home</router-link> 
      <div v-if="!token">
      <router-link to="/login">login</router-link>
      <router-link to="/register">Register</router-link>
      </div>
      <div v-else>
      <h1>Welcome <span>{{user.name}}</span></h1>
      <button @click="logout">logout</button>
      </div>
      
    </nav>
    </div>
</template>

<script>
import {mapActions } from 'vuex'
    export default {
      props:{token: String, user:Object},
      
        methods:{
            ...mapActions(['logout'])
        }
    }
</script>

<style lang="scss" scoped>

nav {
  padding: 20px;
  background:#22BABB;
  display:flex;
  justify-content: space-between;
  align-items:center;
 

  div{
display:flex;
justify-content: space-between;
align-items:center;
h1{
  font-size:1.2rem;
  color:#730202;
  text-transform:Capitalize;
}
button{
  padding:2px 20px;
  border-radius:5px;
  margin:0px 24px;
  background:#9EF8EE;
  font-weight:bold;
}
  }

  a {
    font-weight: bold;
    color: #9EF8EE;
    margin:0px 12px;

    &.router-link-exact-active {
      color: #348888;
    }
  }
}
</style>