'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
    result: 0,

    add(num) {
      calculator.result += num;
    },

    subtract(num) {
      calculator.result -= num;
    },

    multiply(num) {
      calculator.result *= num;
    },

    divide(num) {
      calculator.result /= num;
    },

    operate(callback, num) {
      callback(num);

      return calculator;
    },

    reset() {
      calculator.result = 0;

      return calculator;
    },
  };

  return calculator;
}

module.exports = makeCalculator;
