<template >
    <div class="wrapper">
        <p v-if="token">You are already in!</p>
        <div class="login-container" v-else>
            <form @submit.prevent="saveAuth">
                <label>Login</label>
                <input type="text" name="email" required placeholder="email@example.com" v-model="email">
                <input type="password" name="password" placeholder="password" v-model="password">
                <button type="submit">Login</button>
            </form>
            <router-link to="/register">Sign-up</router-link>
        </div>

    </div>
</template>

<script>
import { mapState } from "vuex";
export default {
    data() {
        return {
            email: "",
            password: ""

        };
    },

    computed: {
        ...mapState(['token'])
    },

    methods: {

        async saveAuth() {
            await this.$store.dispatch('saveAuth', { email: this.email, password: this.password })
            if (this.token) {
                await this.$router.push('/')
            }
        }
    }
}
</script>

<style lang="scss" scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 100px 0px;

    .login-container {
        width: 400px;
        height: 450px;
        padding: 48px;

        display: flex;
        flex-direction: column;
        align-items: center;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
        border-radius: 10px;
        outline: 1px solid #516CA3;
        margin-top: 48px;

        form {
            width: 300px;
            height: 250px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            margin-bottom: 30px;

            label {
                font-weight: bold;
            }

            input,
            button {
                padding: 4px 20px;
            }

            button {
                background: #000;
                color: #fff;
                text-align: center;
            }

        }

        a {
            padding: 2px 5px;
            margin: 40px;
            text-decoration: none;
            font-weight: bold;
            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
            text-align: center;

        }
    }
}
</style>