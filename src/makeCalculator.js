'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
    result: 0,
    operate(callback, n) {
      this.result = callback(n);

      return this;
    },

    add(a) {
      return calculator.result + a;
    },

    subtract(a) {
      return calculator.result - a;
    },

    multiply(a) {
      return calculator.result * a;
    },

    divide(a) {
      return calculator.result / a;
    },

    reset() {
      calculator.result = 0;

      return this;
    },
  };

  return calculator;
}

module.exports = makeCalculator;
