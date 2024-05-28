'use strict';

/**
 * @return {object}
 */
function makeCalculator() {

  const calculator = {

    result: 0,

    operate(callback, number) {
      callback.call(this, number);
      return this;
    },

    add(x) {
      return this.result = this.result + x;

    },

    subtract(x) {
      return this.result = this.result - x;
    },

    multiply(x) {
      return this.result = this.result * x;
    },

    divide(x){
      return this.result = this.result / x;
    },

    reset(){
      this.result = 0;

      return this;

    },
  }
  return calculator;
}



module.exports = makeCalculator;
