'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
    result: 0,

    add(n) {
      calculator.result += n;

      return calculator.result;
    },

    subtract(n) {
      calculator.result -= n;

      return calculator.result;
    },

    multiply(n) {
      calculator.result *= n;

      return calculator.result;
    },

    divide(n) {
      calculator.result /= n;

      return calculator.result;
    },

    reset() {
      calculator.result = 0;

      return calculator;
    },

    operate(callback, n) {
      calculator.result = callback(n);

      return calculator;
    },
  };

  return calculator;
}

module.exports = makeCalculator;
