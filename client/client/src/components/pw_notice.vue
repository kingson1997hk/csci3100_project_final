<template>
  <div>
    <h1>
     {{ msg }}
     </h1>
    <br>
    <nav>
        <router-link to="/">Back to Log In</router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'pw_notice',
  data() {
    return {
         msg: "Please check your email for reseting your password. "
    }
  },
  methods: {
      pw_notice(){
          this.$router.push('/');
      }
  }
}
</script>