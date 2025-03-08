'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  return {
    result: 0,

    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide: (a, b) => a / b,

    operate(callback, num) {
      this.result = callback(this.result, num);

      return this; // Enable chaining
    },

    reset() {
      this.result = 0;

      return this; // Enable chaining
    },
  };
}

module.exports = makeCalculator;
