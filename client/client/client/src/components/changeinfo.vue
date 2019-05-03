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
    <h2> Change Your Information</h2>
    <form @submit.prevent="changeinfo">
      <p v-if="errors.length">
        <b>Please correct the following error(s):</b>
      <ul>
        <li v-for="error in errors">{{ error }}</li>
      </ul>
      </p>

      <h4>

        <p>
          <label for="fullname">FullName: </label><br>
          <input type="text" name ="fullname" id="fullname" v-model="fullname" placeholder="FullName" maxlength="50" >
        </p>

        <p>
          <label for="nickname">NickName: </label><br>
          <input type="text" name ="nickname" id="nickname" v-model="nickname" placeholder="NickName" maxlength="50" >
        </p>

        <p>
          <label for="contactNumber">Contact Number: </label><br>
          <input type="number" name="contactNumber" id="contactNumber" v-model="contactNumber" placeholder="Contact Number" maxlength="8" >
        </p>

        <p>
          <label for="email">Email: </label><br>
          <input type="text" name="email" id="email" v-model="email" placeholder="Email" maxlength="50" >
        </p>

        <p>
          <label for="confirmEmail">Confirm Email: </label><br>
          <input type="text" name="confirmEmail" id="confirmEmail" v-model="confirmEmail" placeholder="Confirm Email" maxlength="50" ><br>
        </p>

        <p>
          <label for="selfintro">Self Introduction: </label><br>
          <textarea v-model="selfintro" placeholder="Your self-introduction" maxlength="500" rows="5"></textarea>
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

<script>import axios from 'axios/index'
var axioss = axios.create({
  baseURL: 'http://localhost:8081/'
})

export default {
  name: 'Login',
  data () {
    return {
      errors: [],
      msg: 'Account Setting',
      fullname: null,
      nickname: null,
      contactNumber: null,
      email: null,
      confirmEmail: null,
      selfintro: null
    }
  },
  methods: {
    changeinfo: async function (e) {
      this.errors = []
      if (this.email) {
        if (!this.confirmEmail) {
          this.errors.push('Confirm Email is empty')
        }
      }

      if (this.confirmEmail) {
        if (!this.email) {
          this.errors.push('Email is empty')
        }
      }

      if (!this.fullanme && !this.nickname && !this.contactNumber && !this.email && !this.confirmEmail && !this.selfintro) {
        this.errors.push('You don\'t have any change')
      }

      if (this.email && this.confirmEmail) {
        if (this.email !== this.confirmEmail) {
          this.errors.push('Email Does Not Match!!!')
        }
      }

      if (this.contactNumber) {
        if (this.contactNumber <= 49999999 || this.contactNumber > 99999999) {
          this.errors.push('Contact Number Is Not Valid')
        }
      }
      if (this.errors.length === 0) {
        try {
          const response = await axioss.post('changeInfo',
            { id: this.$parent.id,
              fullname: this.fullname,
              nickname: this.nickname,
              contactNumber: this.contactNumber,
              email: this.email,
              selfintro: this.selfintro
            })
          console.log(response)
          if (response.data) {
            this.$router.push('/changeinfo_notice')
          } else {
            this.errors.push('Please try again!!!')
            this.fullname = null
            this.nickname = null
            this.contactNumber = null
            this.email = null
            this.confirmEmail = null
            this.selfintro = null
          }
        } catch (error) {
          this.errors.push('Please try again!!!')
          this.fullname = null
          this.nickname = null
          this.contactNumber = null
          this.email = null
          this.confirmEmail = null
          this.selfintro = null
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
    min-height: 800px;
  }
</style>
