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
      callback(value);

      return this;
    },

    add(x) {
      calculator.result += x;
    },

    subtract(x) {
      calculator.result -= x;
    },

    multiply(x) {
      calculator.result *= x;
    },

    divide(x) {
      calculator.result /= x;
    },
  };

  return calculator;
}

module.exports = makeCalculator;
