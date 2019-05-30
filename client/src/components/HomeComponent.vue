<template>
  <div class="container" v-if="!isLoggedIn">
      <h1 class="display-4">Hi There!</h1>
      <p class="lead text-muted">Want to be the king of math? Register Here or Sign in if you already have an account and start training!</p>
      <p>
            <a href="/login" class="btn btn-primary my-2">Sign in</a>
            <a href="/register" class="btn btn-secondary my-2">Register</a>
    </p>
  </div>
  <div class="container" v-else>
      <h1 class="display-4">Welcome {{ username }}!</h1>
      <p class="lead text-muted">What do you want to do now?</p>
  </div>
</template>
<script>
export default {
    computed : {
      isLoggedIn : function(){ return this.$store.getters.isLoggedIn},
      username : function(){ return this.$store.getters.username}
    }
}
</script>
