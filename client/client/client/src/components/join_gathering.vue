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
      <div class="collapsible-menu">
      <input type="checkbox" id="filter-icon">
      <label for="filter-icon" id="filter-label">Filter</label>
      <div class="filter-menu">
    <form @submit.prevent="filter">
      <p v-if="errors.length">
        <b>Please correct the following error(s):</b>
      <ul>
        <li v-for="error in errors">{{ error }}</li>
      </ul>
      </p>

      <p>
        <label for="sportType_filter">Sports Type: </label>
        <select v-model="sportType_filter" ><option disabled value="">Please select one</option>
          <option>Basketball</option>
          <option>Volleyball</option>
          <option>Football</option>
          <option>Table tennis</option>
          <option>Tennis</option>
        </select>
        <br><br>
        <label for="date">Start from date(Year/Month/Day): </label>
        <select v-model="year_filter" ><option disabled value="">Please select one</option>
          <option>2019</option>
          <option>2020</option>
        </select>
        /
        <select v-model="month_filter" ><option disabled value="">Please select one</option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
          <option>6</option>
          <option>7</option>
          <option>8</option>
          <option>9</option>
          <option>10</option>
          <option>11</option>
          <option>12</option>
        </select>
        /
        <select v-model="day_filter" ><option disabled value="">Please select one</option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
          <option>6</option>
          <option>7</option>
          <option>8</option>
          <option>9</option>
          <option>10</option>
          <option>11</option>
          <option>12</option>
          <option>13</option>
          <option>14</option>
          <option>15</option>
          <option>16</option>
          <option>17</option>
          <option>18</option>
          <option>19</option>
          <option>20</option>
          <option>21</option>
          <option>22</option>
          <option>23</option>
          <option>24</option>
          <option>25</option>
          <option>26</option>
          <option>27</option>
          <option>28</option>
          <option>29</option>
          <option>30</option>
          <option>31</option>
        </select>
        <br><br>

        <label for="district_filter">District: </label>
        <select v-model="district_filter" ><option disabled value="">Please select one</option>
          <option disabled value="">Hong Kong Island</option>
          <option>Central & Western District</option>
          <option>Wanchai District</option>
          <option>Eastern District</option>
          <option>Southern District</option>
          <option disabled value="">Kownloon</option>
          <option>Kowloon City District</option>
          <option>Wong Tai Sin District</option>
          <option>Kwun Tong District</option>
          <option>Yau Tsim Mong District</option>
          <option>Sham Shui Po District</option>
          <option disabled value="">New Territories</option>
          <option>Tsuen Wan District</option>
          <option>Kwai Tsing District</option>
          <option>Sai Kung District</option>
          <option>Shatin District</option>
          <option>Tai Po District</option>
          <option>Northern District</option>
          <option>Tuen Mun District</option>
          <option>Yuen Long District</option>
          <option>Islands District</option>
        </select>
        <br><br>
        <button id="submit" type="submit">Filter</button>

      </p>
    </form>
      </div>
      </div>

    <table id="join_gathering">
      <thead id="join_gathering_thead">
      <tr>
        <th style="width: 60px">Join it:</th>
        <th style="width: 65px">Room ID:</th>
        <th style="width: 155px">Group Leader Name:</th>
        <th style="width: 100px">Sports Type:</th>
        <th style="width: 120px">Date:<br><small>(Year/Month/Date)</small></th>
        <th style="width: 90px">Start Time:<br><small>(Hour/Minute)</small></th>
        <th style="width: 90px">End Time:<br><small>(Hour/Minute)</small></th>
        <th style="width: 80px">District: </th>
        <th style="width: 180px">Venue: </th>
        <th style="width: 75px">Required Gender: </th>
        <th style="width: 75px">Age Range: </th>
        <th style="width: 90px">Participant Limit: </th>
        <th style="width: 180px">Description: </th>


      </tr>
      </thead>
      <tbody>
      <tr v-for="array_obj in array_objs">
        <td> <router-link :to="{ name: 'Confirm_join' , params: { array_obj } }">Join</router-link></td>
        <td>{{ array_obj.ID }}</td>
        <td>{{ array_obj.leader_nickname}}</td>
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
    <br><br>
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
  name: 'join_gathering',
  data () {
    return {
      msg: 'Join Gathering',
      array_objs: null,
      sportType_filter: null,
      year_filter: null,
      month_filter: null,
      day_filter: null,
      district_filter: null,
      errors: []
    }
  },
  mounted: function () {
    this.method1() // method1 will execute at pageload
  },
  methods: {
    async method1 () {
      try {
        const response = await axioss.post('findGathering', {
          id: this.$parent.id})
        if (response.data) {
          this.array_objs = response.data
        }
      } catch (error) {}
    },
    filter: async function (e) {
      this.errors = []

      if (this.year_filter && !this.month_filter && !this.day_filter) {
        this.errors.push('Month and day are also required')
      }

      if (!this.year_filter && this.month_filter && !this.day_filter) {
        this.errors.push('Year and day are also required')
      }

      if (!this.year_filter && !this.month_filter && this.day_filter) {
        this.errors.push('Year and month are also required')
      }

      if (this.year_filter && this.month_filter && !this.day_filter) {
        this.errors.push('Day is also required')
      }

      if (this.year_filter && !this.month_filter && this.day_filter) {
        this.errors.push('Month is also required')
      }

      if (!this.year_filter && this.month_filter && this.day_filter) {
        this.errors.push('Year is also required')
      }

      if (this.errors.length === 0) {
        try {
          const response = await axioss.post('filterGathering',
            {
              id: this.$parent.id,
              district: this.district_filter,
              sportType: this.sportType_filter,
              year: this.year_filter,
              month: this.month_filter,
              day: this.day_filter
            })
          console.log(response)
          if (response.data) {
            this.array_objs = response.data
            this.sportType_filter = null
            this.year_filter = null
            this.month_filter = null
            this.day_filter = null
            this.district_filter = null
          }
        } catch (error) {}
      }
      // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    }
  }
}
</script>

<style>
  @import 'style.css';
  #join_gathering {
    font-family: 'Open Sans', sans-serif;
    width: 750px;
    border-collapse: collapse;
    border: 3px solid #44475C;
    margin: 10px 10px 0 10px;
    max-width: 1000px;
    table-layout:fixed;
    font-size: 13px;
  }

  #join_gathering th {
    text-transform: uppercase;
    text-align: left;
    background: #44475C;
    color: #FFF;
    padding: 8px;
    min-width: 30px;
    border-right: 2px solid #7D82A8;
  }

  #join_gathering td {
    text-align: left;
    padding: 8px;
    border-right: 2px solid #7D82A8;
  }
  #join_gathering td:last-child {
    border-right: none;
  }
  #join_gathering tbody tr:nth-child(2n) td {
    background: #D4D8F9;
  }
  #small-item{
    min-height: 600px;
    min-width: 1500px;
    overflow: auto
  }
  .collapsible-menu label{
    padding: 10px 0px 10px 50px;

  }
  #filter-icon{
    display: none
  }
  #filter-label{
    background: url("filter.png") no-repeat left center;
    background-size: 30px 30px;
    font-size: 25px;
    font-weight: bold;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
  }
  .filter-menu{
    max-height: 0;
    overflow: hidden;
    font-size: 20px;
  }
  input:checked ~ #filter-label{
    background-image: url("close.svg");
  }
  input:checked ~ .filter-menu{
    max-height: 100%;
  }
  #submit{
    margin-left: 50px;
    padding: 8px 20px;
    font-size: 15px;

  }
</style>
