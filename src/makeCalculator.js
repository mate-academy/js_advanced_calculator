'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
    result: 0,

    reset() {
      this.result = 0;

      return this;
    },

    operate(callback, value) {
      this.result = callback(value, this.result);

      return this;
    },

    add(x, prev) {
      return prev + x;
    },

    subtract(x, prev) {
      return prev - x;
    },

    divide(x, prev) {
      return prev / x;
    },

    multiply(x, prev) {
      return prev * x;
    },
  };

  return calculator;
}

module.exports = makeCalculator;
