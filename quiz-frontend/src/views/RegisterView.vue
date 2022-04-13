<template>
    <div class="wrapper">
    <div class="login-container">
    <form @submit.prevent="logIn">
        <label>Register</label>
        <input type="text" 
        name="name"
        required
        placeholder="your name" 
        v-model="userReg.name">
        <input type="text" 
        name="email"
        required
        placeholder="email@example.com" 
        v-model="userReg.email">
        <input type="password" 
        name="password" placeholder ="password"
        v-model="userReg.password">
        <button>Rgister</button>
    </form>
    </div>
    
    </div>
</template>

<script>
    export default {
        data() {
    return {
      userReg: {
         name:"" ,
        email: "",
        password: "",
      },
    };
  },
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
            border:1px solid #22BABB;
            border-radius:10px;
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