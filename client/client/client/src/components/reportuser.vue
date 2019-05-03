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
    <form @submit.prevent="reportuser">
     <label for="userid">Reported User: <br></label>
    <input v-model="userid" placeholder="UserID / Username" required><br>
      <br>

     <label for="reportreason">Report Reason: </label> <br>
    <textarea v-model="reportreason" placeholder="Report Reason" required></textarea>
    <br>
      <br>

    <button type="submit">Submit</button>
    </form>
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
  name: 'reportuser',
  data () {
    return {
      userid: '',
      reportreason: '',
      msg: 'Report User'
    }
  },
  methods: {
    async reportuser () {
      try {
        const response = await axioss.post('createReport',
          {
            report_username: this.userid,
            report_by: this.$parent.id,
            reason: this.reportreason
          })
        console.log(response)
        if (response.data) {
          this.$router.push('/report_notice')
        } else {
          this.userid = null
          this.reportreason = null
        }
      } catch (error) {
        this.userid = null
        this.reportreason = null
      }
    }

  }

}
</script>
<style>
  @import 'style.css';
  #small-item{
    min-height: 300px;
  }
</style>
