<template>
  <div>
<div class="position-relative overflow-hidden p-3 p-md-1 m-md-1 text-center bg-light">
      <div class="col-md-5 p-lg-5 mx-auto my-5" v-if="!operation">
        <h1 class="display-4 font-weight-normal">Practice Area</h1>
            <p class="lead font-weight-normal">Choose the arithmetical Operation:</p>

        <button @click="practiceMode('+')" class="btn btn-primary btn-lg btn-scope" type="submit">+</button>
        <button @click="practiceMode('-')" class="btn btn-secondary btn-lg btn-scope" type="submit">-</button>
        <br>
        <button @click="practiceMode('⋅')" class="btn btn-success btn-lg btn-scope" type="submit">⋅</button>
        <button @click="practiceMode('÷')" class="btn btn-danger btn-lg btn-scope" type="submit">÷</button>
      </div>
      <div class="product-device box-shadow d-none d-md-block"></div>
      <div class="product-device product-device-2 box-shadow d-none d-md-block"></div>

    <div class="col-md-5 p-lg-5 mx-auto my-5" v-if="!!operation"><h1>Practice</h1><br>
    <form @submit.prevent="calcResult()">
    <h3>{{ n1 }} {{operation}} {{n2}} = </h3><input v-model="clientInput" class="form-control" type="number" required autofocus>
    <button class="btn btn-primary" v-if="answerWrong|answerRight" @click="nextQuestion()">Next Question</button>
    <button class="btn btn-secondary" v-else type="submit">Submit</button> 
    <br><br>
    <div class="alert alert-success" v-if="answerRight" role="alert">Your answer is right!</div>
    <div class="alert alert-danger" v-if="answerWrong" role="alert">Your answer is wrong! Answer: {{ result }}</div>
    </form>
    </div>
    </div>
  </div>
</template>

<script>
    export default {
        data(){
        return {
          operation:"",
          n1:0,
          n2:0,
          clientInput:Number,
          result: Number,
          answerRight: false,
          answerWrong: false
        }
    },
    methods: {
        practiceMode: function(mode){
            switch(mode){
                case '+':
                    this.operation = "+";
                    break;
                case '-':
                    this.operation = "-";
                    break;
                case '⋅':
                    this.operation = "⋅";
                    break;
                case '÷':
                    this.operation = "÷";
                    break;
            }
            this.randNrs();
        },
        calcResult: function(){
            switch(this.operation){
                case '+':
                    this.result = this.n1 + this.n2;
                    break;
                case '-':
                    this.result = this.n1 - this.n2;
                    break;
                case '⋅':
                    this.result = this.n1 * this.n2;
                    break;
                case '÷':
                    this.result = this.n1 / this.n2;
                    break;
            }
            if (this.result == this.clientInput){
                this.answerRight = true;
            } else {
                this.answerWrong = true;
            }
        },
        randNrs: function(){
            let min;
            let max;
            let tmpnr1;
            let tmpnr2;
            switch(this.operation){
                case '+':
                    min = 1;
                    max = 20;
                    this.n1 = Math.floor(Math.random() * (max - min + 1) ) + min;
                    this.n2 = Math.floor(Math.random() * (max - min + 1 ) ) + min;
                    break;
                case '-':
                    min = 1;
                    max = 20;
                    tmpnr1 = Math.floor(Math.random() * (max - min + 1) ) + min;
                    tmpnr2 = Math.floor(Math.random() * (max - min + 1) ) + min;
                    if (tmpnr1 <= tmpnr2){
                        this.n2 = tmpnr1;
                        this.n1 = tmpnr2;
                    } else{
                        this.n1 = tmpnr1;
                        this.n2 = tmpnr2;
                    }
                    break;
                case '⋅':
                    min = 1;
                    max = 9;
                    this.n1 = Math.floor(Math.random() * (max - min + 1) ) + min;
                    this.n2 = Math.floor(Math.random() * (max - min + 1) ) + min;
                    break;
                case '÷':
                    min = 1;
                    max = 9;
                    this.n2 = Math.floor(Math.random() * (max - min + 1) ) + min;
                    tmpnr2 = Math.floor(Math.random() * (max - min + 1) ) + min;
                    this.n1 = this.n2*tmpnr2;
                    break;
            }
        },
        nextQuestion: function(){
            this.answerRight = false;
            this.answerWrong = false;
            this.clientInput = null;
            this.randNrs();
        }
    }
  }
</script>

<style scoped>
.btn-scope {
    height: 130px;
    width: 130px;
    margin: 5px;
    font-size: 50px;
}

h3{
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

input[type=number] {
    -moz-appearance:textfield; /* Firefox */
}
</style>
