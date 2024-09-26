'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
    result: 0,

    operate(callback, b) {
      callback(b);

      return this;
    },

    add(b) {
      calculator.result += b;
    },

    subtract(b) {
      calculator.result -= b;
    },

    divide(b) {
      calculator.result /= b;
    },

    multiply(b) {
      calculator.result *= b;
    },

    reset() {
      calculator.result = 0;

      return this;
    },
  };

  return calculator;
}

module.exports = makeCalculator;
