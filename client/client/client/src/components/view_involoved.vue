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
     <h2>Created by yourself</h2>
   <table class="view_involoved">
        <thead>
            <tr>
              <th style="width: 60px"></th>
              <th style="width: 65px">Room ID</th>
              <th style="width: 155px">Group Leader Name:</th>
              <th style="width: 100px">Sports Type: </th>
              <th style="width: 120px">Date:<br><small>(Year/Month/Date)</small></th>
              <th style="width: 90px">Start Time:<br><small>(Hour/Minute)</small></th>
              <th style="width: 90px">End Time:<br><small>(Hour/Minute)</small></th>
              <th style="width: 80px">District: </th>
              <th style="width: 180px">Venue: </th>
              <th style="width: 75px">Required Gender: </th>
              <th style="width: 75px">Age Range: </th>
              <th style="width: 90px">Participant Limit: </th>
              <th style="width: 180px">Discription: </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="array_obj in array_objs">
              <td> <router-link :to="{ name : 'See_members' , params: { array_obj } }">More Details</router-link></td>
              <td>{{ array_obj.ID }}</td>
              <td>{{ array_obj.nickname }}</td>
              <td>{{ array_obj.sport_type }}</td>
              <td>{{ array_obj.year }}/{{array_obj.month}}/{{array_obj.day}}</td>
              <td>{{ array_obj.start_hour}}:{{array_obj.start_minute}}</td>
              <td>{{array_obj.end_hour}}:{{array_obj.end_minute}}</td>
              <td>{{array_obj.district}}</td>
              <td>{{array_obj.venue}}</td>
              <td>{{array_obj.gender}}</td>
              <td>{{array_obj.age_lower_range}}-{{array_obj.age_upper_range}}</td>
              <td>{{array_obj.participant_lower_limit}}-{{array_obj.participant_upper_limit}}</td>
              <td>{{array_obj.discription}}</td>
            </tr>
          </tbody>
          </table>

    <h2>Created by others</h2>

    <table class="view_involoved">
        <thead>
        <tr>
          <th style="width: 60px"></th>
          <th style="width: 65px">Room ID</th>
          <th style="width: 155px">Group Leader Name:</th>
          <th style="width: 100px">Sports Type: </th>
          <th style="width: 120px">Date:<br><small>(Year/Month/Date)</small></th>
          <th style="width: 90px">Start Time:<br><small>(Hour/Minute)</small></th>
          <th style="width: 90px">End Time:<br><small>(Hour/Minute)</small></th>
          <th style="width: 80px">District: </th>
          <th style="width: 180px">Venue: </th>
          <th style="width: 75px">Required Gender: </th>
          <th style="width: 75px">Age Range: </th>
          <th style="width: 90px">Participant Limit: </th>
          <th style="width: 180px">Discription: </th>
        </tr>
          </thead>
          <tbody>
            <tr v-for="array_obj in array_objs_2">
              <td> <router-link :to="{ name : 'See_members' , params: { array_obj } }">More Details</router-link></td>
              <td>{{ array_obj.ID }}</td>
              <td>{{ array_obj.nickname }}</td>
              <td>{{ array_obj.sport_type }}</td>
              <td>{{ array_obj.year }}/{{array_obj.month}}/{{array_obj.day}}</td>
              <td>{{ array_obj.start_hour}}:{{array_obj.start_minute}}</td>
              <td>{{array_obj.end_hour}}:{{array_obj.end_minute}}</td>
              <td>{{array_obj.district}}</td>
              <td>{{array_obj.venue}}</td>
              <td>{{array_obj.gender}}</td>
              <td>{{array_obj.age_lower_range}}-{{array_obj.age_upper_range}}</td>
              <td>{{array_obj.participant_lower_limit}}-{{array_obj.participant_upper_limit}}</td>
              <td>{{array_obj.discription}}</td>
            </tr>
          </tbody>
          </table>
    </h3>
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
  name: 'view_involoved',
  data () {
    return {
      msg: 'View the involoved Gathering',
      array_objs: null,
      array_objs_2: null,
      ascending: false
    }
  },
  mounted: function () {
    this.method1() // method1 will execute at pageload
    this.method2() // method1 will execute at pageload
  },
  methods: {
    async method1 () {
      try {
        const response = await axioss.post('selectMYgathering',
          {
            id: this.$parent.id
          })
        console.log(response.data)
        if (response.data) {
          this.array_objs = response.data
          // console.log(this.array_objs)
        } else {
        }
      } catch (error) {
      }
    },
    async method2 () {
      try {
        const response = await axioss.post('selectJgathering',
          {
            id: this.$parent.id
          })
        console.log(response.data)
        if (response.data) {
          this.array_objs_2 = response.data
          // console.log(this.array_objs)
        } else {
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
    min-width: 1600px;
    min-height: 600px;
    overflow: auto
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
