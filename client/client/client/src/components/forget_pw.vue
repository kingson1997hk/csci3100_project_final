<template>
  <div id="forget">
  <form @submit.prevent="forget_pw">
    <h1><label for="email">Enter your email to get back your account: </label> </h1>
    <input type="text" name="email" id="email" v-model="email" placeholder="Enter your email" required>
    <button type="submit>">Submit</button>
    </form>
    <br>
    <nav>
        <router-link to="/">Back to Log In Page</router-link>
    </nav>
  </div>
</template>

<script>
import axios from 'axios/index'
var axioss = axios.create({
  baseURL: 'http://localhost:8081/'
})

export default {
  name: 'forget_pw',
  data () {
    return {
      email: ''
    }
  },
  methods: {
    async forget_pw () {
      try {
        // const response = await axioss.post('resetPW', {
        //   email: this.email
        // })
      } catch (error) {
        this.error = error.response.data.error
      }
      this.$router.push('/')
    }
  }
}
</script>

<style>
  html {
    background: url("sport.jpg") no-repeat center center fixed;
    -webkit-background-size: cover;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
  }
  #forget  {
    background-color: rgba(255, 255, 255, 0.8);
    height: 40%;
    width: 96%;
    min-width: 300px;
    min-height: 250px;
  }
  form, nav{
    padding: 10px;
  }

</style>
