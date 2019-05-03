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
    <h2> You Information</h2>
      <table>
        <tr>
          <td><h3 class="info">UserID: </h3></td>
          <td><h3 class="info user">{{this.$parent.id}}</h3></td>
        </tr>
        <tr>
          <td><h3 class="info">FullName: </h3></td>
          <td><h3 class="info user">{{fullname}}</h3></td>
        </tr>
        <tr>
          <td><h3 class="info">NickName: </h3></td>
          <td><h3 class="info user">{{nickname}}</h3></td>
        </tr>
        <tr>
          <td><h3 class="info">UserName: </h3></td>
          <td><h3 class="info user">{{username}}</h3></td>
        </tr>
        <tr>
          <td><h3 class="info">Gender: </h3></td>
          <td><h3 class="info user">{{gender}}</h3></td>
        </tr>
        <tr>
          <td><h3 class="info">Age: </h3></td>
          <td><h3 class="info user">{{age}}</h3></td>
        </tr>
        <tr>
          <td><h3 class="info">Contact Number: </h3></td>
          <td><h3 class="info user">{{contactNumber}}</h3></td>
        </tr>
        <tr>
          <td> <h3 class="info">Email: </h3></td>
          <td><h3 class="info user">{{email}}</h3></td>
        </tr>
        <tr>
          <td><h3 class="info">Self Introduction: </h3></td>
          <td><h3 class="info user">{{selfintro}}</h3></td>
        </tr>
      </table>
      <br>
      <br>
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
  name: 'viewinfo',
  data () {
    return {
      msg: 'Account Setting',
      fullname: null,
      nickname: null,
      username: null,
      gender: null,
      age: null,
      contactNumber: null,
      email: null,
      selfintro: null
    }
  },
  mounted: function () {
    this.method1() // method1 will execute at pageload
  },
  methods: {
    async method1 () {
      // -- write login authencation logic here! --
      // let auth = true;
      // if( auth )
      // this.$router.push('HelloWorld');
      // else
      //   alert('login failed')
      // console.log("login")
      console.log(this.$parent.id)
      try {
        const response = await axioss.post('viewInfo',
          { msg: this.msg,
            id: this.$parent.id
            
          })
      console.log(this.$parent.id)

        console.log(response.data)
        if (response.data) {
          this.fullname = response.data.fullname
          this.nickname = response.data.nickname
          this.username = response.data.username
          this.gender = response.data.gender
          this.age = response.data.age_range
          this.contactNumber = response.data.phone_number
          this.email = response.data.email
          this.selfintro = response.data.self_intro
        } else {
          this.$router.push('accountsetting')
        }
      } catch (error) {
        this.$router.push('accountsetting')
      }
    }
  }
}
</script>
<style>
  @import 'style.css';
  #small-item{
    min-height: 1000px;
  }
  .info{
    display: inline;
  }
  table, th, td {
    border: 1px solid black;
    border-collapse: collapse;
    background-color: white;
    min-width: 200px;
    padding: 5px;
  }
  table{
    max-height: 500px;
  }
  .user{
    color: red;
  }
</style>
