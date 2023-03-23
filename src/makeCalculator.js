'use strict';

function makeCalculator() {
  const calculator = {
    result: 0,

    add(number) {
      return calculator.result + number;
    },

    subtract(number) {
      return calculator.result - number;
    },

    multiply(number) {
      return calculator.result * number;
    },

    divide(number) {
      return calculator.result / number;
    },

    operate(callback, number) {
      this.result = callback(number);

      return this;
    },

    reset() {
      this.result = 0;

      return this;
    },
  };

  return calculator;
}

module.exports = makeCalculator;
