'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
    result: 0,

    operate(method, number) {
      return method(number);
    },

    reset() {
      calculator.result = 0;

      return calculator;
    },

    add(number) {
      calculator.result += number;

      return calculator;
    },

    subtract(number) {
      calculator.result -= number;

      return calculator;
    },

    multiply(number) {
      calculator.result *= number;

      return calculator;
    },

    divide(number) {
      calculator.result /= number;

      return calculator;
    },
  };

  return calculator;
}

module.exports = makeCalculator;
