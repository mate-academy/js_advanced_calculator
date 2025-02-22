'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  return {
    result: 0,

    operate(callback, n) {
      this.result = callback(this.result, n);

      return this;
    },

    reset() {
      this.result = 0;

      return this;
    },

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
      if (b) {
        return a / b;
      }
    },
  };
}

module.exports = makeCalculator;
