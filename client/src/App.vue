<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <router-link to="/" class="nav-link">EducateMe</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/teach" class="nav-link">Teach</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/practice" class="nav-link">Practice</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/test" class="nav-link">Test</router-link>
        </li>
      </ul>
      <a v-if="isLoggedIn" href="/stats" class="btn btn-outline-light my-sm-0" >My Stats</a>
      <button v-if="isLoggedIn" @click="logout" class="btn btn-outline-dark my-sm-0" type="submit">Logout</button>
    </nav><br />
    <transition name="fade">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
  export default {
    computed : {
      isLoggedIn : function(){ return this.$store.getters.isLoggedIn}
    },
    methods: {
      logout: function () {
        this.$store.dispatch('logout')
        .then(() => {
          this.$router.push('/login')
        })
      }
    },
  }
</script>

<style lang="css" scoped>
button {
  margin: 5px;
}
</style>