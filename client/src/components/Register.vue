<template>  
  <div class="container">
    <div class="row">
      <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
        <div class="card card-signin my-5">
          <div class="card-body">
            <h5 class="card-title text-center">Register</h5>
            <form @submit.prevent="register()" class="form-signin">
              <div class="form-label-group">
                <input id="inputEmail" class="form-control" placeholder="Email address" v-model="user.username" required autofocus>
                <label for="inputEmail">Email address</label>
              </div>

              <div class="form-label-group">
                <input type="password" id="inputPassword" class="form-control" placeholder="Password" v-model="user.password" required>
                <label for="inputPassword">Password</label>
              </div>

              <div class="custom-control custom-checkbox mb-3">
                <input type="checkbox" class="custom-control-input" id="customCheck1">
                <label class="custom-control-label" for="customCheck1">Remember password</label>
              </div>
              <button class="btn btn-lg btn-primary btn-block text-uppercase" type="submit">Register</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>  
  export default {
    data(){
      return {
        user:{}
      }
    },
    methods: {
      register(){
      let uri = 'http://localhost:4000/users/register';
      this.axios.post(uri, this.user).then(() => {
      this.$router.push({name: 'login'});
    });
      }
    }
  }
</script>
