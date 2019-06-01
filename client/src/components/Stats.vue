<template>
  <div>
    <h1 class="display-4">Your solved Tests:</h1>
    <table class="table table-hover">
      <thead>
        <tr>
          <th>Date</th>
          <th>Right Answers</th>
          <th>Wrong Answers</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="testResult in testResults" :key="testResult._id">
          <td>{{ testResult.createdDate }}</td>
          <td>{{ testResult.wrongAnswers }}</td>
          <td>{{ testResult.rightAnswers }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      testResults: {}
    };
  },
  created() {
    let uri = "http://localhost:4000/tests/getUserResults";
    this.axios.post(uri, this.username).then(response => {
      this.testResults = response.data;
    });
  },
  computed: {
    username: function() {
      return { username: this.$store.getters.username };
    }
  },
  methods: {}
};
</script>