'use strict';

function makeCalculator() {
  const Calculator = {
    result: 0,

    add(number, result) {
      return result + number;
    },

    subtract(number, result) {
      return result - number;
    },

    multiply(number, result) {
      return result * number;
    },

    divide(number, result) {
      return result / number;
    },

    reset() {
      this.result = 0;

      return this;
    },

    operate(callback, number) {
      this.result = callback(number, this.result);

      return this;
    },
  };

  return Calculator;
}

module.exports = makeCalculator;
