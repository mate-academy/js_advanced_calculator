'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  // write code here
  return {
    result: 0,

    reset() {
      this.result = 0;

      return this;
    },

    operate(operation, value) {
      this.result = operation(this.result, value);

      return this;
    },

    add(a, b) {
      return a + b;
    },

    subtract(a, b) {
      return a - b;
    },

    divide(a, b) {
      return a / b;
    },

    multiply(a, b) {
      return a * b;
    },
  };
}

module.exports = makeCalculator;
