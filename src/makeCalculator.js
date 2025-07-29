'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  return {
    result: 0,

    add(a, b) {
      return a + b;
    },

    subtract(a, b) {
      return a - b;
    },

    multiply(a, b) {
      return a * b;
    },

    divide(a, b) {
      return a / b;
    },

    operate(callback, number) {
      this.result = callback(this.result, number);

      return this; // for chaining
    },

    reset() {
      this.result = 0;

      return this; // for chaining
    },
  };
}

module.exports = makeCalculator;
