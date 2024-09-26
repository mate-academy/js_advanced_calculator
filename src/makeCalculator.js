'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  // write code here
  const calculator = {
    result: 0,

    add(number) {
      calculator.result += number;

      return calculator.result;
    },

    subtract(number) {
      calculator.result -= number;

      return calculator.result;
    },

    multiply(number) {
      calculator.result *= number;

      return calculator.result;
    },

    divide(number) {
      calculator.result /= number;

      return calculator.result;
    },

    reset() {
      calculator.result = 0;

      return calculator;
    },

    operate(callback, number) {
      calculator.result = callback(number);

      return calculator;
    },
  };

  return calculator;
}

module.exports = makeCalculator;
