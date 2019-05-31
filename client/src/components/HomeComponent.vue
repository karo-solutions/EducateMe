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
      <div class="album py-5">
        <div class="container">
          <div class="row">
            <div class="col-md-4">
              <div class="card mb-4 box-shadow">
                <img class="card-img-top" src="../assets/teach.jpg"  alt="teach-jpg" data-holder-rendered="true">
                <div class="card-body">
                  <p class="card-text">If you want to learn basic math this is the right section for you.</p>
                      <a class="btn btn-block" href="/teach"><button class="btn btn-success btn-lg btn-block">Teach Section</button></a>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card mb-4 box-shadow">
                <img class="card-img-top" src="../assets/practice.jpg" alt="practice-jpg" data-holder-rendered="true" style="height: 225px; width: 100%; display: block;">
                <div class="card-body">
                  <p class="card-text">If you want to improve your math skills press here.</p>
                  <a class="btn btn-block" href="/practice"><button class="btn btn-primary btn-lg btn-block">Practice</button></a>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card mb-4 box-shadow">
                <img class="card-img-top" src="../assets/test.jpg" alt="test-jpg" data-holder-rendered="true" style="height: 225px; width: 100%; display: block;">
                <div class="card-body">
                  <p class="card-text">If you want to test your math skills press here.</p>
                  <a class="btn btn-block" href="/test"><button class="btn btn-danger btn-lg btn-block">Test</button></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
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
