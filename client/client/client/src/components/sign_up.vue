/* eslint-disable */
<template>
  <div id="outer-form">
<div id="form">
  <div id="inner-form">
    <br>
    <h1> SportS </h1>
    <h1> Sign Up </h1>
    <form @submit.prevent="checkForm">
    <p v-if="errors.length">
        <b>Please correct the following error(s):</b>
        <ul>
         <li v-for="error in errors">{{ error }}</li>
        </ul>
      </p>

      <h4>

    <p>
    <label for="fullname">FullName: </label><br>
    <input type="text" name ="fullname" id="fullname" v-model="fullname" placeholder="FullName" maxlength="50" required>
    </p>

    <p>
    <label for="nickname">NickName: </label><br>
    <input type="text" name ="nickname" id="nickname" v-model="nickname" placeholder="NickName" maxlength="50" required>
    </p>

    <p>
    <label for="username">Username: </label><br>
    <input type="text" name ="username" id="username" v-model="username" placeholder="Username" maxlength="30" required>
    </p>

    <p>
    <label for="password">Password: </label><br>
    <input type="password" name="password" id="password" v-model="password" placeholder="Password" maxlength="20" required>
    </p>

    <p>
    <label for="confirmPassword">Confirm Password: </label><br>
    <input type="password" name="confirmPassword" id="confirmPassword" v-model="confirmPassword" placeholder="Confirm Password" maxlength="15" required>
    </p>

    <p>
    <label for="gender">Gender: </label><br>
    <input type="radio" id="male" value="Male" v-model="gender"> <label for ="male">Male</label>
             <input type="radio" id="female" value="Female" v-model="gender"><label for="female">Female</label>
    </p>

    <p>
    <label for="age">Age: </label><br>
    <select v-model="age" required><option disabled value="">Please select one</option>
        <option>12-18</option>
        <option>19-25</option>
        <option>26-40</option>
        <option>41-60</option>
        <option>>=61</option
    ></select>
    </p>

    <p>
    <label for="contactNumber">Contact Number: </label><br>
    <input type="number" name="contactNumber" id="contactNumber" v-model="contactNumber" placeholder="Contact Number" maxlength="8" required>
    </p>

    <p>
    <label for="email">Email: </label><br>
    <input type="text" name="email" id="email" v-model="email" placeholder="Email" maxlength="50" required>
    </p>

    <p>
    <label for="confirmEmail">Confirm Email: </label><br>
    <input type="text" name="confirmEmail" id="confirmEmail" v-model="confirmEmail" placeholder="Confirm Email" maxlength="50" required><br>
    </p>

    <p>
    <label for= "selfintro" >Self Introduction: </label><br>
    <textarea v-model="selfintro" placeholder="Your self-introduction" maxlength="500" rows="5"></textarea>
    </p>

    </h4>

    <p>
    <button type="submit">Submit</button>
    <br><br>

    </p>

    </form>
    <nav>
        <router-link to="/">Back to Log In</router-link>
    </nav>
</div>
</div>
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
      errors: [],
      username: null,
      password: null,
      fullname: null,
      nickname: null,
      confirmPassword: null,
      gender: null,
      age: null,
      disability: null,
      contactNumber: null,
      email: null,
      confirmEmail: null,
      selfintro: null
    }
  },
  methods: {
    checkForm: async function (e) {
      this.errors = []
      if (!this.gender) {
        this.errors.push('Gender Required.')
      }
      if (this.password !== this.confirmPassword) {
        this.errors.push('Password Does Not Match!!!')
      }
      if (this.email !== this.confirmEmail) {
        this.errors.push('Email Does Not Match!!!')
      }
      if (this.contactNumber <= 49999999 || this.contactNumber > 99999999) {
        this.errors.push('Contact Number Is Not Valid')
      }
      if (this.errors.length === 0) {
        try {
          const response = await axioss.post('createUser', {
            username: this.username,
            password: this.password,
            fullname: this.fullname,
            nickname: this.nickname,
            email: this.email,
            gender: this.gender,
            age: this.age,
            contactNumber: this.contactNumber,
            selfintro: this.selfintro
          })
          console.log(response)
        } catch (error) {
          this.errors.push(error.response.data.error)
          this.username = null
          this.password = null
          this.confirmPassword = null
        }
      }
      if (this.errors.length === 0) {
        this.$router.push('/')
      }
      e.preventDefault()
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
  #outer-form{
  }
  #form{
    background-color: rgba(255, 255, 255, 0.8);
    margin: auto;
    height: 100%;
    width: 30%;
    min-width: 220px;
    min-height: 1000px;
    overflow: auto;
  }
  #inner-form{
    width: 30%;
    margin: auto;
    min-width: 170px;

  }
  input[type=number]::-webkit-inner-spin-button,
  input[type=number]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
</style>
