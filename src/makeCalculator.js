'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  // write code here
  return {
    result: 0,
    add(a, b) {
      return a + b;
    },
    multiply(a, b) {
      return a * b;
    },
    subtract(a, b) {
      return a - b;
    },
    divide(a, b) {
      return a / b;
    },

    reset() {
      this.result = 0;

      return this;
    },
    operate(callback, num) {
      this.result = callback(this.result, num);

      return this;
    },
  };
}

module.exports = makeCalculator;
