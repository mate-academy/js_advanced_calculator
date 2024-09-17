'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  // write code here
  const calculator = {
    result: 0,

    operate(callback, value) {
      this.result = callback(value);

      return this;
    },

    reset() {
      this.result = 0;

      return this;
    },

    add(value) {
      return calculator.result + value;
    },

    subtract(value) {
      return calculator.result - value;
    },

    multiply(value) {
      return calculator.result * value;
    },

    divide(value) {
      return calculator.result / value;
    },
  };

  return calculator;
}

module.exports = makeCalculator;
