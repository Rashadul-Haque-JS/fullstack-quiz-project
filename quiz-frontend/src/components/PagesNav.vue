<template>
  <div>
    <nav>
      <router-link @click.native="getMessages(blankMgs)" to="/">Home</router-link>
      <div v-if="!token">
        <router-link to="/login">login</router-link>
        <router-link to="/register">Register</router-link>
      </div>
      <div v-else>
        <router-link to="/profile" class="user-name" @click.native="getMessages(blankMgs)">Most welcome
          <span>{{ user.name }} !</span></router-link>
        <button @click="logout">logout</button>
      </div>

    </nav>
  </div>
</template>

<script>
import { mapActions } from "vuex"
export default {
  props: { token: String, user: Object },
  data() {
    return {
      blankMgs: ''
    };
  },


  methods: {
    async logout() {
      this.$store.dispatch('logout')
      await this.$router.push('/login')
    },

    ...mapActions(['getMessages'])
  }
}
</script>

<style lang="scss" scoped>
nav {
  padding: 20px;
  background: #000;
  display: flex;
  justify-content: space-between;
  align-items: center;


  div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .user-name {
      font-size: 1.2rem;
      color: #DFFF9B;
      text-transform: Capitalize;

      span {
        color: #DFFF9B;
      }
    }

    button {
      padding: 2px 20px;
      border-radius: 5px;
      margin: 0px 24px;
      background: #9EF8EE;
      font-weight: bold;
    }
  }

  a {
    font-weight: bold;
    color: #DFFF9B;
    margin: 0px 12px;

    &.router-link-exact-active {
      color: #9EF8EE;
    }
  }
}
</style>