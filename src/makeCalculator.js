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

    operate(callback, number) {
      calculator.result = callback(number);

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
