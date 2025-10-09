'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  return {
    result: 0,

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
      if (b === 0) {
        throw new Error('Division by zero.');
      }

      return a / b;
    },
    operate(callback, n) {
      this.result = callback(this.result, n);

      return this;
    },
  };
}

module.exports = makeCalculator;
