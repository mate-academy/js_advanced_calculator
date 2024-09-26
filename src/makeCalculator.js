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

    operate(callback, number) {
      calculator.result = callback(number);

      return calculator;
    },

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
  };

  return calculator;
}

module.exports = makeCalculator;
