'use strict';

/**
 * Generates an object with main calculator operations.
 * @return {object}
 */
function makeCalculator() {
  return {
    result: 0,

    operate(operation, value) {
      this.result = operation(value, this.result);

      return this;
    },

    reset() {
      this.result = 0;

      return this;
    },

    add(value, result) {
      return result + value;
    },

    subtract(value, result) {
      return result - value;
    },

    divide(value, result) {
      return result / value;
    },

    multiply(value, result) {
      return result * value;
    },
  };
}

module.exports = makeCalculator;
