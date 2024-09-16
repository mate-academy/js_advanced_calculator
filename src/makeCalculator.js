'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
    result: 0,

    add(num) {
      calculator.result += num;

      return calculator.result;
    },

    multiply(num) {
      calculator.result *= num;

      return calculator.result;
    },

    subtract(num) {
      calculator.result -= num;

      return calculator.result;
    },

    divide(num) {
      calculator.result /= num;

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
