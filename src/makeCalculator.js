'use strict';

/**
 * @return {object}
 */
function makeCalculator(operatop, number) {
  // write code here
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

    multiply(x) {
      calculator.result *= x;

      return calculator;
    },

    divide(x) {
      calculator.result /= x;

      return calculator;
    },

    reset(x) {
      calculator.result = 0;

      return calculator;
    },

    operate(operate, x) {
      operate(x);

      return calculator;
    },
  };

  return calculator;
}

module.exports = makeCalculator;
