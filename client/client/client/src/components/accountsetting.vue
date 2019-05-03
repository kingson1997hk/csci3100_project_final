
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

      <ul id="setting-ul">
        <li class="setting-li"><h2 class="setting-h2"><router-link to="/viewinfo" class="setting-item">View Account Information</router-link></h2></li>
        <li class="setting-li"><h2 class="setting-h2"><router-link to="/changeinfo" class="setting-item">Change Account Information</router-link></h2></li>
        <li class="setting-li"><h2 class="setting-h2"><router-link to="/changepw" class="setting-item">Change Account Password</router-link></h2></li>
      </ul>

    <nav>
        <router-link to="/HelloWorld">Back to Main Page</router-link>
    </nav>
  </div>
  </div>
</template>

<script>
export default {
  name: 'accountsetting',
  data () {
    return {
      msg: 'Account Setting'
    }
  }
}
</script>

<style>
  @import 'style.css';
  #small-item{
    min-height: 400px;
  }
  #setting-ul{
    list-style-type: none;
    margin: 0;
    padding: 0;
  }
  .setting-li .setting-h2 .setting-item {
    display: block;
    width: 320px;
    min-width: 320px;
    background-color: #f1f1f1;
    padding: 8px 16px;
    text-decoration: none;
    color: #000;

  }
  .setting-li .setting-h2 :hover {
    background-color: #555;
    color: white;
  }
</style>
