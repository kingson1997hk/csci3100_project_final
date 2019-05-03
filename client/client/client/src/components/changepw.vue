/* eslint-disable */
<template>
  <div id="big-form">
    <ul id="bar-ul">
      <li class="bar-li"><h3 class="bar-h3"><router-link to="/HelloWorld" class="bar-item">Main Page</router-link></h3></li>
      <li class="bar-li"><h3 class="bar-h3"><router-link to="/initiate" class="bar-item">Initiate New Gathering</router-link></h3></li>
      <li class="bar-li"><h3 class="bar-h3"><router-link to="/join_gathering" class="bar-item">Join The Gathering</router-link></h3></li>
      <li class="bar-li"><h3 class="bar-h3"><router-link to="/view_involoved" class="bar-item">View The Involoved Gathering</router-link></h3></li>
      <li class="bar-li"><h3 class="bar-h3"><router-link to="/reportuser" class="bar-item">Report User</router-link></h3></li>
      <li class="bar-li"><h3 class="bar-h3"><router-link to="/accountsetting" class="bar-item">Account Setting</router-link></h3></li>
      <li class="bar-li" style="float:right"><h3  class="bar-h3"><router-link to="/" class="bar-item">{{this.$parent.name}}<br>Log Out</router-link></h3></li>
    </ul>
    <div id="small-item">
  <h1>{{ msg }}</h1>
    <h2> Change Your Password</h2>

    <form @submit.prevent="changepw">
    <p v-if="errors.length">
        <b>Please correct the following error(s):</b>
        <ul>
           <li v-for="error in errors">{{ error }}</li>
        </ul>
    </p>

    <h4>

     <p>
    <label for="curpassword">Current Password: </label>
    <input type="curpassword" name="curpassword" id="curpassword" v-model="curpassword" placeholder="Current Password" maxlength="20" required>
    </p>

     <p>
    <label for="password">New Password: </label>
    <input type="password" name="password" id="password" v-model="password" placeholder="Password" maxlength="20" required>
    </p>

    <p>
    <label for="confirmPassword">Confirm Password: </label>
    <input type="password" name="confirmPassword" id="confirmPassword" v-model="confirmPassword" placeholder="Confirm Password" maxlength="15" required>
    </p>

    </h4>

    <p>
    <button type="submit">Submit</button>
    <br><br>

    </p>

    </form>
    <nav>
      <router-link to="/HelloWorld">Back to Main Page</router-link>
    </nav>
</div>
</div>
</template>

<script>
import axios from 'axios/index'
var axioss = axios.create({
  baseURL: 'http://localhost:8081/'
})

export default {
  name: 'changepw',
  data () {
    return {
      errors: [
      ],
      msg: 'Account Setting',
      password: null,
      confirmPassword: null,
      curpassword: null
    }
  },
  methods: {
    changepw: async function (e) {
      this.errors = []
      if (this.password !== this.confirmPassword) {
        this.errors.push('Password Does Not Match!!!')
      }
      if (!this.curpassword) {
        this.errors.push('You need to enter your current password!!')
      }
      if (this.errors.length === 0) {
        try {
          const response = await axioss.post('changePW',
            {
              id: this.$parent.id,
              password: this.curpassword,
              newPassword: this.password
            })
          console.log(response)
          if (response.data) {
            this.$router.push('/changepw_notice')
          } else {
            this.errors.push('Wrong current password!')
            this.password = null
            this.confirmPassword = null
            this.curpassword = null
          }
        } catch (error) {
          this.errors.push('Wrong current password!')
          this.password = null
          this.confirmPassword = null
          this.curpassword = null
        }
      }
      e.preventDefault()
    }
  }
}
</script>

<style>
  @import 'style.css';
  #small-item{
    min-height: 400px;
  }
</style>
