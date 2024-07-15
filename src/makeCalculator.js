'use strict';

/**
 * Generates an object with main calculator operations.
 * @return {object}
 */
function makeCalculator() {
  return {
    result: 0,

    operate(operation, value) {
      operation.call(this, value);

      return this;
    },

    reset() {
      this.result = 0;

      return this;
    },

    add(value) {
      this.result += value;
    },

    subtract(value) {
      this.result -= value;
    },

    divide(value) {
      this.result /= value;
    },

    multiply(value) {
      this.result *= value;
    },
  };
}

module.exports = makeCalculator;
