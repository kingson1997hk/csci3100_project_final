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
   <h1> {{ msg }} </h1>
   <h5>We are SportsS, with the underlying meaning doing sports in groups, not to be alone. Our objective are as it follows, promoting the atmosphere of doing sports in Hong Kong, helps individuals to make new friends, especially for those with different nationalities or with disabilities, enriching social life of modern people, not just about spending money to shop or staying at home. Our group deeply believe that sports can improve our life physically and mentally, and most importantly, meeting new friends is a kind of happiness. 
</h5>
  <h3> New: </h3>
  <h4> 11/4/2019 (Latest): SportS service starts!! </h4>
   
  </div>
  </div>

</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to SportS!!'
    }
  }
}
</script>
<style>
  @import 'style.css';
  #small-item{
    min-height: 400px;
  }
</style>
