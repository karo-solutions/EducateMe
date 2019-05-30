<template>  
  <div class="container">
    <div class="row">
      <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
        <div class="card card-signin my-5">
          <div class="card-body">
            <h5 class="card-title text-center">Sign In</h5>
            <form @submit.prevent="login()" class="form-signin">
              <div class="form-label-group">
                <input class="form-control" placeholder="Username" v-model="username" required autofocus>
                <label>Username</label>
              </div>

              <div class="form-label-group">
                <input type="password" class="form-control" placeholder="Password" v-model="password" required>
                <label>Password</label>
              </div>

              <div class="custom-control custom-checkbox mb-3">
                <!--input type="checkbox" class="custom-control-input" id="customCheck1">
                <label-- class="custom-control-label" for="customCheck1">Remember password</label-->
              </div>
              <button class="btn btn-lg btn-primary btn-block text-uppercase" type="submit">Sign in</button>
            </form>
          <div class="d-flex justify-content-center links">
						Don't have an account? <a href="/register" class="ml-2">Register</a>
					</div>
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
        username: "",
        password: ""
      }
    },
    methods: {
      login: function () {
      let user = {
        username: this.username,
        password: this.password
      }
      
      this.$store.dispatch('login', { user })
       .then(() => this.$router.push('/'))
       .catch(err => console.log(err))
      }
        //let uri = 'http://localhost:4000/users/authenticate';
        //this.axios.post(uri, this.user).then((response) => {
        //    console.log(response)
        //    localStorage.setItem('username', response.data.username)
        //    localStorage.setItem('user-token',response.data.token)
        //});
      }
    }
</script>
