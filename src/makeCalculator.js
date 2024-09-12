'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  // write code here
  const calculator = {
    result: 0,

    operate(callback, number) {
      this.result = callback(this.result, number);

      return this;
    },

    add(value, number) {
      return value + number;
    },

    subtract(value, number) {
      return value - number;
    },

    divide(value, number) {
      return value / number;
    },

    multiply(value, number) {
      return value * number;
    },

    reset() {
      this.result = 0;

      return this;
    },
  };

  return calculator;
}

module.exports = makeCalculator;
