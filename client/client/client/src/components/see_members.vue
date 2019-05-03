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
    <h1>
    Following is the gathering information:
    </h1>
    <table class="view_involoved">
        <thead>
            <tr>
              <th>information</th></tr>
          </thead>
          <tbody>
            <tr>
            <td>Room Leader ID: {{array_obj.ID}}</td>
            </tr>
            <tr>
              <td>Room Leader Name: {{array_obj.nickname}}</td>
            </tr>
            <tr>
              <td>Room Leader Contact Number: {{array_obj.phone_number}}</td>
            </tr>
            <tr>
            <td>Sport Type: {{array_obj.sport_type}}</td>
            </tr>
             <tr>
            <td>Date: {{array_obj.year}}/{{array_obj.month}}/{{array_obj.day}}</td>
            </tr>
             <tr>
            <td>Start Time: {{array_obj.start_hour}}:{{array_obj.start_minute}}</td>
            </tr>
             <tr>
            <td>End Time: {{array_obj.end_hour}}:{{array_obj.end_minute}}</td>
            </tr>
             <tr>
            <td>District: {{array_obj.district}}</td>
            </tr>
             <tr>
            <td>Venue: {{array_obj.venue}}</td>
            </tr>
             <tr>
            <td>Required Gender: {{array_obj.gender}}</td>
            </tr>
          </tbody>
          </table>

          <table class="view_involoved">
            <thead>
              <tr>
                <th></th>
                <th>Participant Name</th>
                <th>Participant Contact Number</th>
              </tr>
            </thead>
          <tbody>
            <tr v-for="(participant, index) in participants">
              <td> {{index+1}} </td>
              <td>{{participant.nickname}}</td>
                <td>{{participant.phone_number}}</td>
            </tr>
             </tbody>
          </table>
      <br><nav>
        <router-link to="/HelloWorld">Back to Main Page</router-link>
        <br><router-link to="/view_involoved">View another gathering</router-link>
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
  name: 'See_members',
  props: ['array_obj'],
  data () {
    return {
      participants: null
    }
  },
  mounted: function () {
    this.method1() // method1 will execute at pageload
  },
  methods: {
    async method1 () {
      try {
        const response = await axioss.post('viewParticipant',
          {
            id: this.array_obj.ID
          })
        console.log(response.data)
        if (response.data) {
          this.participants = response.data
        }
      } catch (error) {
      }
    }

  }

}
</script>

<style>
@import 'style.css';
#small-item{
  min-height: 500px;
  overflow: auto;
}
.view_involoved {
  font-family: 'Open Sans', sans-serif;
  width: 750px;
  border-collapse: collapse;
  border: 3px solid #44475C;
  margin: 10px 10px 0 10px;
  max-width: 1000px;
  table-layout:fixed;
  font-size: 13px;
  overflow: auto;
}

.view_involoved th {
  text-transform: uppercase;
  text-align: left;
  background: #44475C;
  color: #FFF;
  padding: 8px;
  min-width: 30px;
  border-right: 2px solid #7D82A8;
}

.view_involoved td {
  text-align: left;
  padding: 8px;
  border-right: 2px solid #7D82A8;
}
.view_involoved td:last-child {
  border-right: none;
}
.view_involoved tbody tr:nth-child(2n) td {
  background: #D4D8F9;
}
</style>
