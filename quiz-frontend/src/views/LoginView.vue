<template>
    <div class="wrapper">
    <div class="login-container">
    <form @submit.prevent="saveAuth({email, password})">
        <label>Login</label>
        <input type="text" 
        name="email"
        required
        placeholder="email@example.com" 
        v-model="email">
        <input type="password" 
        name="password" placeholder ="password"
        v-model="password">
        <button type="submit" @click="redirect">Login</button>
    </form>
    <router-link to="/register">Sign-up</router-link>
    </div>
    
    </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
    export default {
        data() {
    return {
    email: "",
    password: ""
      
    };
  },

  computed:{
      ...mapState(['token'])
  },

  methods:{
      ...mapActions(['saveAuth']),
      redirect(){
          this.token ? this.$router.push('/') : ''
      }
  }
    }
</script>

<style lang="scss" scoped>
    *{
        margin:0;
        padding:0;
        box-sizing:border-box;
    }
    .wrapper{
        display:flex;
        justify-content: center;
        align-items:center;

        .login-container{
            width:400px;
            height:450px;
            padding:48px;

            display:flex;
            flex-direction:column;
            align-items:center;
            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
            border-radius:10px;
            border:1px solid #22BABB;
            margin-top:48px;

            form{
            width:300px;
            height:250px;
            display:flex;
            flex-direction:column;
            justify-content:space-between;

            input,button{
                padding:4px 20px;
            }

            button{
            background:#000;
            color:#fff;
            text-align:center;
            }

            }

            a{
                padding:40px;
                margin:40px;
                text-decoration:none;
            }
        }
    }
</style>