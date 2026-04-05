'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
    result: 0,

    add(result, x) {
      return result + x;
    },

    subtract(result, x) {
      return result - x;
    },

    multiply(result, x) {
      return result * x;
    },

    divide(result, x) {
      return result / x;
    },

    reset() {
      this.result = 0;

      return this;
    },

    operate(operation, x) {
      this.result = operation(this.result, x);

      return this;
    },
  };

  return calculator;
}

module.exports = makeCalculator;
