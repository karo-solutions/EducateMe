<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
        <div class="card card-signin my-5" v-if="!registerSuccess">
          <div class="card-body">
            <h5 class="card-title text-center">Register</h5>
            <form @submit.prevent="register()" class="form-signin">
              <div class="form-label-group">
                <input
                  id="inputEmail"
                  class="form-control"
                  placeholder="Username"
                  v-model="user.username"
                  required
                  autofocus
                >
                <label>Username</label>
              </div>

              <div class="form-label-group">
                <input
                  type="password"
                  v-bind:class="pwErrorClass"
                  placeholder="Password"
                  v-model="user.password"
                  required
                >
                <label>Password</label>
              </div>

              <div class="form-label-group">
                <input
                  type="password"
                  v-bind:class="pwErrorClass"
                  placeholder="Confirm Password"
                  v-model="confirmpassword"
                  required
                >
                <label>Confirm Password</label>
              </div>

              <div class="custom-control custom-checkbox mb-3">
                <!--input type="checkbox" class="custom-control-input" id="customCheck1">
                <label class="custom-control-label" for="customCheck1">Remember password</label-->
                <div
                  class="alert alert-danger"
                  v-if="errorPWMatch"
                  role="alert"
                >Passwords did not match!</div>
                <div
                  class="alert alert-danger"
                  v-if="errorUserExist"
                  role="alert"
                >Username already exist!</div>
              </div>
              <button class="btn btn-lg btn-primary btn-block text-uppercase" type="submit">Register</button>
            </form>
            <div class="d-flex justify-content-center links">
              You already have an account?
              <a href="/login" class="ml-2">Login</a>
            </div>
          </div>
        </div>
        <div class="card card-signin my-5" v-else>
          <div class="card-body">
            <div class="alert alert-success" role="alert">
              Sucessfully registered!<a href="/login" class="ml-2">Login</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {},
      confirmpassword: "",
      errorPWMatch: false,
      errorUserExist: false,
      registerSuccess: false
    };
  },
  computed: {
    pwErrorClass: function() {
      return {
        "form-control": true,
        "is-invalid": this.error
      };
    }
  },
  methods: {
    register() {
      if (this.confirmpassword != this.user.password) {
        this.errorPWMatch = true;
      } else {
        this.errorPWMatch = false;
        this.errorUserExist = false;
        let uri = "http://localhost:4000/users/register";
        this.axios
          .post(uri, this.user)
          .then(() => {
            this.registerSuccess = true;
          })
          .catch(err => {
            this.errorUserExist = true;
          });
      }
    }
  }
};
</script>
