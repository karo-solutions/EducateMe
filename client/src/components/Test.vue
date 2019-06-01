<template>
  <div>
    <div class="position-relative overflow-hidden p-3 p-md-1 m-md-1 text-center bg-light">
      <div class="col-md-5 p-lg-5 mx-auto my-5" v-if="!operation">
        <h1 class="display-4 font-weight-normal">Test Area</h1>
        <p class="lead font-weight-normal">Are you ready?</p>

        <button
          @click="testMode()"
          class="btn btn-primary btn-lg btn-block"
          type="submit"
        >Start Test</button>
      </div>
      <div class="product-device box-shadow d-none d-md-block"></div>
      <div class="product-device product-device-2 box-shadow d-none d-md-block"></div>

      <div class="col-md-5 p-lg-5 mx-auto my-5" v-if="!!operation">
        <h1>Test</h1>
        <br>
        <form @submit.prevent="calcResult()" v-if="!finished">
          <h3>{{ n1 }} {{operation}} {{n2}} =</h3>
          <input v-model="clientInput" class="form-control" type="number" required autofocus>
          <button class="btn btn-primary" v-if="answered" @click="nextQuestion()">Next Question</button>
          <button class="btn btn-secondary" v-else type="submit">Submit</button>
          <br>
          <br>
          <div
            class="alert alert-secondary"
            v-if="answered"
            role="alert"
          >Answer saved. You'll see the Result in the end!</div>
          <div class="progress">
            <div class="progress-bar" role="progressbar" :style="progressPercent"></div>
          </div>
        </form>
        <div v-if="finished">
          <h3>Congrationlation you've finished the Test!</h3>
          <button
            @click="submitTestResult()"
            class="btn btn-primary btn-lg btn-block"
            type="submit"
          >Submit and view results!</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      operation: "",
      finished: false,
      n1: 0,
      n2: 0,
      clientInput: Number,
      result: Number,
      rightAnswers: 0,
      wrongAnswers: 0,
      maxAnswers: 10,
      answered: false
    };
  },
  computed: {
    progressPercent: function() {
      return {
        width:
          ((this.rightAnswers + this.wrongAnswers) / this.maxAnswers) * 100 +
          "%"
      };
    },
    username : function(){ return this.$store.getters.username}
  },
  methods: {
    testMode: function() {
      let mode = Math.floor(Math.random() * (4 - 1 + 1)) + 1;
      switch (mode) {
        case 1:
          this.operation = "+";
          break;
        case 2:
          this.operation = "-";
          break;
        case 3:
          this.operation = "⋅";
          break;
        case 4:
          this.operation = "÷";
          break;
      }
      this.randNrs();
    },
    calcResult: function() {
      switch (this.operation) {
        case "+":
          this.result = this.n1 + this.n2;
          break;
        case "-":
          this.result = this.n1 - this.n2;
          break;
        case "⋅":
          this.result = this.n1 * this.n2;
          break;
        case "÷":
          this.result = this.n1 / this.n2;
          break;
      }
      this.answered = true;
      if (this.result == this.clientInput) {
        this.rightAnswers++;
      } else {
        this.wrongAnswers++;
      }

      if (this.rightAnswers + this.wrongAnswers >= this.maxAnswers) {
        //this.operation = "";
        this.finished = true;
      }
    },
    randNrs: function() {
      let min;
      let max;
      let tmpnr1;
      let tmpnr2;
      switch (this.operation) {
        case "+":
          min = 1;
          max = 20;
          this.n1 = Math.floor(Math.random() * (max - min + 1)) + min;
          this.n2 = Math.floor(Math.random() * (max - min + 1)) + min;
          break;
        case "-":
          min = 1;
          max = 20;
          tmpnr1 = Math.floor(Math.random() * (max - min + 1)) + min;
          tmpnr2 = Math.floor(Math.random() * (max - min + 1)) + min;
          if (tmpnr1 <= tmpnr2) {
            this.n2 = tmpnr1;
            this.n1 = tmpnr2;
          } else {
            this.n1 = tmpnr1;
            this.n2 = tmpnr2;
          }
          break;
        case "⋅":
          min = 1;
          max = 9;
          this.n1 = Math.floor(Math.random() * (max - min + 1)) + min;
          this.n2 = Math.floor(Math.random() * (max - min + 1)) + min;
          break;
        case "÷":
          min = 1;
          max = 9;
          this.n2 = Math.floor(Math.random() * (max - min + 1)) + min;
          tmpnr2 = Math.floor(Math.random() * (max - min + 1)) + min;
          this.n1 = this.n2 * tmpnr2;
          break;
      }
    },
    nextQuestion: function() {
      this.testMode();
      this.clientInput = null;
      this.answered = false;
      this.randNrs();
    },
    submitTestResult: function(){
      let uri = 'http://localhost:4000/tests/addResult';
      let testResult = {
        username: this.username,
        wrongAnswers: this.wrongAnswers,
        rightAnswers: this.rightAnswers
      }
      this.axios.post(uri, testResult).then((response) => {
        this.$router.push({name: 'stats'});
      });
    }
  }
};
</script>

<style scoped>
.btn-scope {
  height: 130px;
  width: 130px;
  margin: 5px;
  font-size: 50px;
}

h3 {
  display: inline-block;
}

input {
  width: 50px;
  display: inline-block;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  /* display: none; <- Crashes Chrome on hover */
  -webkit-appearance: none;
  margin: 0; /* <-- Apparently some margin are still there even though it's hidden */
}

input[type="number"] {
  -moz-appearance: textfield; /* Firefox */
}
</style>
