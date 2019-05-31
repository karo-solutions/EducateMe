<template>
  <div>
<div class="position-relative overflow-hidden p-3 p-md-1 m-md-1 text-center bg-light">
      <div class="col-md-5 p-lg-5 mx-auto my-5" v-if="!operation">
        <h1 class="display-4 font-weight-normal">Practice Area</h1>
            <p class="lead font-weight-normal">Choose the arithmetical Operation:</p>

        <button @click="practice('+')" class="btn btn-primary btn-lg" type="submit">+</button>
        <button @click="practice('-')" class="btn btn-secondary btn-lg" type="submit">-</button>
        <br>
        <button @click="practice('⋅')" class="btn btn-success btn-lg" type="submit">⋅</button>
        <button @click="practice('÷')" class="btn btn-danger btn-lg" type="submit">÷</button>
      </div>
      <div class="product-device box-shadow d-none d-md-block"></div>
      <div class="product-device product-device-2 box-shadow d-none d-md-block"></div>

    <div class="col-md-5 p-lg-5 mx-auto my-5" v-if="!!operation"><h1>Practice</h1><br>
    <h3>{{ n1 }} {{operation}} {{n2}} = </h3><input class="form-control" type="number" required autofocus>
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
          n2:0
        }
    },
    methods: {
        practice: function(mode){
            switch(mode){
                case '+':
                    console.log("PLUS CHOOSEN");
                    this.operation = "+";
                    break;
                case '-':
                    console.log("Minus CHOOSEN");
                    this.operation = "-";
                    break;
                case '⋅':
                    console.log("Multipicate CHOOSEN");
                    this.n1 = 5;
                    this.n2 = 2;
                    this.operation = "⋅";
                    break;
                case '÷':
                    console.log("Divide CHOOSEN");
                    this.operation = "÷";
                    break;
                
            }
            
        }
      
    }
  }
</script>

<style scoped>
button {
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
