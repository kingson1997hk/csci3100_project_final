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
    <div id="initiate_inner">
    <h1> Initiate New Gathering </h1>
    <form @submit.prevent="initiate">
    <p v-if="errors.length">
        <b>Please correct the following error(s):</b>
        <ul>
           <li v-for="error in errors">{{ error }}</li>
        </ul>
    </p>

    <h4>
      <label for="sportType">Sports Type: </label>
    <select v-model="sportType" required><option disabled value="">Please select one</option>
        <option>Basketball</option>
        <option>Volleyball</option>
        <option>Football</option>
        <option>Table tennis</option>
        <option>Tennis</option>
    </select>
    <br><br>
    <label for="date">Date:(Year/Month/Day) </label>
    <select v-model="year" required><option disabled value="">Please select one</option>
        <option>2019</option>
        <option>2020</option>
    </select>
    /
    <select v-model="month" required><option disabled value="">Please select one</option>
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
    <select v-model="day" required><option disabled value="">Please select one</option>
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
    <label for="start_time">Start Time:(Hour:Minute) </label>
    <select v-model="start_hour" required><option disabled value="">Please select one</option>
        <option>00</option>
        <option>01</option>
        <option>02</option>
        <option>03</option>
        <option>04</option>
        <option>05</option>
        <option>06</option>
        <option>07</option>
        <option>08</option>
        <option>09</option>
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
    </select>
  :
    <select v-model="start_minute" required><option disabled value="">Please select one</option>
        <option>00</option><option>15</option><option>30</option><option>45</option>
    </select>
    <br><br>
    <label for="end_time">End Time:(Hour:Minute) </label>
    <select v-model="end_hour" required><option disabled value="">Please select one</option>
        <option>00</option>
        <option>01</option>
        <option>02</option>
        <option>03</option>
        <option>04</option>
        <option>05</option>
        <option>06</option>
        <option>07</option>
        <option>08</option>
        <option>09</option>
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
    </select>
    :
    <select v-model="end_minute" required><option disabled value="">Please select one</option>
        <option>00</option><option>15</option><option>30</option><option>45</option>
    </select>

    <br><br>

    <label for="district">District: </label>
    <select v-model="district" required><option disabled value="">Please select one</option>
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

    <label for="venue">Venue: </label>
    <input type="text" name ="venue" id="venue" v-model="venue" placeholder="Venue" maxlength="50" required>

    <br><br>

    <label for="required_gender">Required Gender: </label>
    <input type="radio" id="male" value="Male" v-model="gender"> <label for ="male">Male</label>
      <input type="radio" id="female" value="Female" v-model="gender"><label for="female">Female</label>
      <input type="radio" id="both" value="Both" v-model="gender"><label for="both">Both</label>

    <br><br>

    <label for="age_upper_range">Age Upper Range:(Optional) </label>
    <input type="number" name="age_upper_range" id="age_upper_range" v-model="age_upper_range" placeholder="Age Upper Range" maxlength="2" min="1">

    <br><br>

    <label for="age_lower_range">Age Lower Range:(Optional) </label>
    <input type="number" name="age_lower_range" id="age_lower_range" v-model="age_lower_range" placeholder="Age Lower Range" maxlength="2" min="1">

    <br><br>

    <label for="participant_upper_limit">Participant Upper Limit:(Optional) </label>
    <input type="number" name="participant_upper_limit" id="participant_upper_limit" v-model="participant_upper_limit" placeholder="Participant Upper Limit" maxlength="2" min="1">

    <br><br>

    <label for="participant_lower_limit">Participant Lower Limit:(Optional) </label>
    <input type="number" name="participant_lower_limit" id="participant_lower_limit" v-model="participant_lower_limit" placeholder="Participant Lower Limit" maxlength="2" min="1">

    <br><br>

    <p>
    <label for="description">Discription:(Optional) </label>
    <textarea v-model="discription" placeholder="Disscription" maxlength="500"></textarea>
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
</div>
</template>

<script>
import axios from 'axios/index'
var axioss = axios.create({
  baseURL: 'http://localhost:8081/'
})

export default {
  name: 'initiate',
  data () {
    return {
      errors: [],
      sportType: null,
      year: null,
      month: null,
      day: null,
      start_hour: null,
      start_minute: null,
      end_hour: null,
      end_minute: null,
      district: null,
      venue: null,
      gender: null,
      age_upper_range: null,
      age_lower_range: null,
      participant_upper_limit: null,
      participant_lower_limit: null,
      discription: null
    }
  },
  methods: {
    initiate: async function (e) {
      this.errors = []

      if (!this.gender) {
        this.errors.push('Gender Required.')
      }
      console.log(this.gender);
      // Insert the upload time
      // var d = new Date()
      // this.upload_time = d.toLocaleString(); // you see see~~~~~~~~~~
      // group leader id is equal to the current user id
      // his.group_leader_id =

      if (this.errors.length === 0) {
        try {
          const response = await axioss.post('createGathering', {
            sportType: this.sportType,
            year: this.year,
            month: this.month,
            day: this.day,
            start_hour: this.start_hour,
            start_minute: this.start_minute,
            end_hour: this.end_hour,
            end_minute: this.end_minute,
            district: this.district,
            venue: this.venue,
            gender: this.gender,
            age_upper_range: this.age_upper_range,
            age_lower_range: this.age_lower_range,
            participant_upper_limit: this.participant_upper_limit,
            participant_lower_limit: this.participant_lower_limit,
            discription: this.discription,
            group_leader_id: this.$parent.id,
            leader_nickname: this.$parent.name
          })
          console.log(response)
          this.$router.push('initiate_notice')

        } catch (error) {

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
