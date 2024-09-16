'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
    result: 0,

    operate(callback, num) {
      callback(num);

      return calculator;
    },

    add(num) {
      calculator.result += num;

      return calculator.result;
    },

    subtract(num) {
      calculator.result -= num;

      return calculator.result;
    },

    multiply(num) {
      calculator.result *= num;

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
  };

  return calculator;
}

module.exports = makeCalculator;
