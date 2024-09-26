'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
    result: 0,

    reset() {
      calculator.result = 0;

      return calculator;
    },

    add(arg) {
      calculator.result += arg;

      return calculator.result;
    },

    subtract(arg) {
      calculator.result -= arg;

      return calculator.result;
    },

    multiply(arg) {
      calculator.result *= arg;

      return calculator.result;
    },

    divide(arg) {
      calculator.result /= arg;

      return calculator.result;
    },

    operate(callback, arg) {
      callback(arg);

      return calculator;
    },
  };

  return calculator;
}

module.exports = makeCalculator;
