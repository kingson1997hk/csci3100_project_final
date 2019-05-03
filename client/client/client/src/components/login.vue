<template>
  <div id="login">
    <header>
      <h1>SportS</h1>
      <h1>Login Page</h1>
    </header>
      <p v-if="errors">
        <b>Wrong username or password!</b>
      </p>
    <form @submit.prevent="login">
      <label for="username">Username: </label>
    <input type="text" name="username" id="username" v-model="username" placeholder="Enter your username" maxlength="30" required>
<br><br>
    <label for="password">Password: </label>
    <input type="password" name="password" id="password" v-model="password" placeholder="Enter your password" maxlength="20" required>
<br><br><br>
        <button type="submit">Log In</button>
    </form>
    <br>
    <nav>
        <router-link to="/sign_up">Sign Up</router-link> |
        <router-link to="/forget_pw">Forget Password</router-link>
    </nav>
  </div>
</template>

<script>
import axios from 'axios/index'
var axioss = axios.create({
  baseURL: 'http://localhost:8081/'
})

export default {
  name: 'Login',
  data () {
    return {
      errors: false,
      username: '',
      password: ''
    }
  },
  methods: {
    async login () {
      // -- write login authencation logic here! --
      // let auth = true;
      // if( auth )
      // this.$router.push('HelloWorld');
      // else
      //   alert('login failed')
      // console.log("login")
      try {
        const response = await axioss.post('checkLogin',
          {username: this.username,
            password: this.password
          })
        console.log(response)
        if (response.data) {
          this.$parent.id = response.data.ID.toString()
          this.$parent.name = response.data.nickname
          this.$router.push('HelloWorld')
        } else {
          this.errors = true
          this.username = null
          this.password = null
        }
      } catch (error) {
        this.errors = true
        this.username = null
        this.password = null
      }
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
  #login  {
    background-color: rgba(255, 255, 255, 0.8);
    height: 50%;
    width: 80%;
    padding: 20px;
    text-align: center;
    min-width: 300px;
    min-height: 300px;
    margin: auto;
  }
</style>
