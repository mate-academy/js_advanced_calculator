'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
    result: 0,
    operate(callback, x) {
      this.result = callback(x);

      return this;
    },

    add(x) {
      return calculator.result + x;
    },

    subtract(x) {
      return calculator.result - x;
    },

    divide(x) {
      return calculator.result / x;
    },

    multiply(x) {
      return calculator.result * x;
    },

    reset() {
      this.result = 0;

      return this;
    },
  };

  return calculator;
}

module.exports = makeCalculator;
