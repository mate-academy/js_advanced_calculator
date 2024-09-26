'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const сalculator = {
    result: 0,

    add(result, value) {
      return result + value;
    },

    subtract(result, value) {
      return result - value;
    },

    divide(result, value) {
      return result / value;
    },

    multiply(result, value) {
      return result * value;
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

  return сalculator;
}

module.exports = makeCalculator;
