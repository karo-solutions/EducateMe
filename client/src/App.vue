<template>
  <div>
    <div class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom box-shadow">
      <h5 class="my-0 mr-md-auto font-weight-normal">EducateMe</h5>
      <nav class="my-2 my-md-0 mr-md-3">
        <a class="p-2 text-dark" href="/">Home</a>
        <a class="p-2 text-dark" href="/teach">Teach</a>
        <a class="p-2 text-dark" href="/practice">Practice</a>
        <a class="p-2 text-dark" href="/test">Test</a>
      </nav>
      <a class="btn btn-outline-primary" v-if="isLoggedIn" href="/stats">My Stats</a>
        <button
        v-if="isLoggedIn"
        @click="logout"
        class="btn btn-outline-dark my-sm-0"
        type="submit"
      >Logout</button>
    </div>
    <br>
    <transition name="fade">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  computed: {
    isLoggedIn: function() {
      return this.$store.getters.isLoggedIn;
    }
  },
  methods: {
    logout: function() {
      this.$store.dispatch("logout").then(() => {
        this.$router.push("/login");
      });
    }
  }
};
</script>

<style lang="css" scoped>
button {
  margin: 5px;
}
</style>