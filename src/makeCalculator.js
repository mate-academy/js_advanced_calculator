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

    operate(operation, value) {
      this.result = operation(this.result, value);
      return this;
    },

    reset() {
      this.result = 0;
      return this;
    },
  };
}

module.exports = makeCalculator;
