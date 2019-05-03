<template>
  <div id="big-form">
    <ul id="bar-ul">
      <li class="bar-li"><h3 class="bar-h3"><router-link to="/initiate" class="bar-item">Initiate New Gathering</router-link></h3></li>
      <li class="bar-li"><h3 class="bar-h3"><router-link to="/join_gathering" class="bar-item">Join The Gathering</router-link></h3></li>
      <li class="bar-li"><h3 class="bar-h3"><router-link to="/view_involoved" class="bar-item">View The Involoved Gathering</router-link></h3></li>
      <li class="bar-li"><h3 class="bar-h3"><router-link to="/reportuser" class="bar-item">Report User</router-link></h3></li>
      <li class="bar-li"><h3 class="bar-h3"><router-link to="/accountsetting" class="bar-item">Account Setting</router-link></h3></li>
      <li class="bar-li" style="float:right"><h3  class="bar-h3"><router-link to="/" class="bar-item">{{this.$parent.name}}<br>Log Out</router-link></h3></li>
    </ul>
    <div id="small-item">
    <h1>
     {{ msg }}
     <br>
     {{ msg2 }}
     </h1>
    <br>

    <nav>
        <router-link to="/HelloWorld">Back to Main Page</router-link>
    </nav>
  </div>
  </div>
</template>

<script>
export default {
  name: 'changeinfo_notice',
  data () {
    return {
      msg: 'Account information is changed Successfully!',
      msg2: 'You can go to Account Setting to view your information!'
    }
  }
}
</script>
<style>
  @import 'style.css';
  </style>
