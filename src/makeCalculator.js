'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  return {
    result: 0,

    operate(operation, value) {
      this.result = operation(this.result, value);

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
      if (b === 0) {
        throw new Error('Division by zero');
      }

      return a / b;
    },
  };
}

module.exports = makeCalculator;
