/* eslint-disable */
<template>
  <div id="big-form">
    <ul id="bar-ul">
      <li class="bar-li"><h3 class="bar-h3"><router-link to="/initiate" class="bar-item">Initiate New Gathering</router-link></h3></li>
      <li class="bar-li"><h3 class="bar-h3"><router-link to="/join_gathering" class="bar-item">Join The Gathering</router-link></h3></li>
      <li class="bar-li"><h3 class="bar-h3"><router-link to="/view_involoved" class="bar-item">View The Involoved Gathering</router-link></h3></li>
      <li class="bar-li"><h3 class="bar-h3"><router-link to="/reportuser" class="bar-item">Report User</router-link></h3></li>
      <li class="bar-li"><h3 class="bar-h3"><router-link to="/accountsetting" class="bar-item">Account Setting</router-link></h3></li>
      <li class="bar-li" style="float:right"><h3  class="bar-h3"><router-link to="/" class="bar-item">Log Out</router-link></h3></li>
    </ul>
    <div id="small-item">
    <h1>
    You join the gathering successfully!!
    Following is the gathering information:
    </h1>
    <table class="view_involoved">
        <thead>
            <tr>
              <th>information</th></tr>
          </thead>
          <tbody>
            <tr>
            <td>Room ID: {{array_obj.ID}}</td>
            </tr>
            <tr>
            <td>Group Leader ID: {{array_obj.group_leader_id}}</td>
            </tr>
            <tr>
              <td>Room Leader Name: {{array_obj.leader_nickname}}</td>
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
            <td>End Time: {{array_obj.end_hour}}{{array_obj.end_minture}}</td>
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
             <tr>
            <td>Age Upper Range: {{array_obj.age_upper_range}}</td>
            </tr>
             <tr>
            <td>Age Lower Range: {{array_obj.age_lower_range}}</td>
            </tr>
            <tr>
            <td>Participant Upper Limit: {{array_obj.participant_upper_limit}}</td>
            </tr>
            <tr>
            <td>Participant Lower Limit: {{array_obj.participant_lower_limit}}</td>
            </tr>
            <tr>
            <td>Description: {{array_obj.discription}}</td>
            </tr>
          </tbody>
          </table>
    <br>
    <nav>
        <router-link to="/HelloWorld">Back to Main Page</router-link>
        <br><router-link to="/join_gathering">Join another gathering</router-link>
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
  name: 'Confirm_join',
  props: ['array_obj'],
  data () {
    return {
    }
  },
  mounted: function () {
    this.method1() // method1 will execute at pageload
  },
  methods: {
    async method1 () {
      try {
        const response = await axioss.post('joinGathering',
          {room_id: this.array_obj.ID,
            user_id: this.$parent.id
          })
        console.log(response.data)
        if (response.data) {}
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
</style>
