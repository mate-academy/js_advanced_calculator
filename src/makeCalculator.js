'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  // write code here
  return {
    result: 0,

    add(n) {
      this.result += n;
    },

    subtract(n) {
      this.result -= n;
    },

    multiply(n) {
      this.result *= n;
    },

    divide(n) {
      this.result /= n;
    },

    operate(callback, n) {
      callback.call(this, n);

      return this;
    },

    reset() {
      this.result = 0;

      return this;
    },
  };
}

module.exports = makeCalculator;
