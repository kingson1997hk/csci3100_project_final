<template>
    <div id="small-item">
    <h1>
     {{ msg }}
     </h1>
    <br>

    <nav>
        <router-link to="/">Go to Login Page</router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'signup_notice',
  data () {
    return {
      msg: 'Sign up Successfully!'
    }
  }
}
</script>
<style>
  @import 'style.css';
  </style>