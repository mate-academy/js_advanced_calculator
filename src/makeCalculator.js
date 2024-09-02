'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
    result: 0,

    add(x) {
      calculator.result += x;

      return calculator;
    },

    subtract(x) {
      calculator.result -= x;

      return calculator;
    },

    divide(x) {
      calculator.result /= x;

      return calculator;
    },

    multiply(x) {
      calculator.result *= x;

      return calculator;
    },

    reset() {
      calculator.result = 0;

      return calculator;
    },

    operate(callback, x) {
      callback(x);

      return calculator;
    },
  };

  return calculator;
}

module.exports = makeCalculator;
