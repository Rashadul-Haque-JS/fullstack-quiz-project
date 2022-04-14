<template>
    <div class="wrapper">
    <div class="login-container">
    <form @submit.prevent="signupAct">
        <label>Register</label>
        <input type="text" 
        name="name"
        required
        placeholder="your name" 
        v-model="newUser.name">
        <input type="text" 
        name="email"
        required
        placeholder="email@example.com" 
        v-model="newUser.email">
        <input type="password" 
        name="password" placeholder ="password"
        v-model="newUser.password">
        <button>Rgister</button>
    </form>
    </div>
    
    </div>
</template>

<script>
import { mapState } from "vuex";
    export default {
        data() {
    return {
      newUser: {
         name:"" ,
        email: "",
        password: "",
      },
    };
  },

  computed:{
      ...mapState(['token'])
  },

  methods:{
   async signupAct(){
     await  this.$store.dispatch('signup', this.newUser)
       if(this.token){
      await  this.$router.push('/') 
       }
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
        padding:100px 0px;

        .login-container{
            width:400px;
            height:450px;
            padding:48px;

            display:flex;
            flex-direction:column;
            align-items:center;
            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
            outline:1px solid #516CA3;
            border-radius:10px;
            margin-top:48px;

            form{
            width:300px;
            height:250px;
            display:flex;
            flex-direction:column;
            justify-content:space-between;

            label{
                font-weight:bold;
            }

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