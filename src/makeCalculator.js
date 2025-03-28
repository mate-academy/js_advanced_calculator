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

    operate(callback, value) {
      this.result = callback(this.result, value);

      return this; // Allow method chaining
    },

    reset() {
      this.result = 0;

      return this; // Allow method chaining
    },
  };
}

module.exports = makeCalculator;
