'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  // write code here
  return {
    result: 0,

    add(x) {
      this.result += x;

      return this.result;
    },

    subtract(x) {
      this.result -= x;

      return this.result;
    },

    multiply(x) {
      this.result *= x;

      return this.result;
    },

    divide(x) {
      this.result /= x;

      return this.result;
    },

    operate(callback, value) {
      callback.call(this, value);

      return this; // chaining support
    },

    reset() {
      this.result = 0;

      return this; // chaining support
    },
  };
}

module.exports = makeCalculator;
