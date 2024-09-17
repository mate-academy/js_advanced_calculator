'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  // write code here
  return {
    result: 0,

    add(value, result) {
      return result + value;
    },

    subtract(value, result) {
      return result - value;
    },

    multiply(value, result) {
      return result * value;
    },

    divide(value, result) {
      return result / value;
    },

    operate(callback, value) {
      this.result = callback(value, this.result);

      return this;
    },

    reset() {
      this.result = 0;

      return this;
    },
  };
}

module.exports = makeCalculator;
