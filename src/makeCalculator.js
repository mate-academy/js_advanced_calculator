'use strict';

/**
 * @return {object}
 */

function makeCalculator() {
  const calculator = {
    result: 0,

    add(x) {
      calculator.result += x;

      return calculator.result;
    },

    multiply(x) {
      calculator.result *= x;

      return calculator.result;
    },

    divide(x) {
      calculator.result /= x;

      return calculator.result;
    },

    subtract(x) {
      calculator.result -= x;

      return calculator.result;
    },

    reset() {
      calculator.result = 0;

      return calculator;
    },

    operate(callback, num) {
      calculator.result = callback(num);

      return calculator;
    },
  };

  return calculator;
}
module.exports = makeCalculator;
