'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
    result: 0,

    add(num) {
      calculator.result += num;

      return calculator;
    },

    subtract(num) {
      calculator.result -= num;

      return calculator;
    },

    multiply(num) {
      calculator.result *= num;

      return calculator;
    },

    divide(num) {
      calculator.result /= num;

      return calculator;
    },

    reset() {
      calculator.result = 0;

      return calculator;
    },

    operate(callback, num = 0) {
      return callback(num);
    },
  };

  return calculator;
}

module.exports = makeCalculator;
