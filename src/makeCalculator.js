'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
    result: 0,

    operate(operation, number) {
      calculator.result = operation(number);

      return calculator;
    },

    add(n) {
      calculator.result += n;

      return calculator.result;
    },

    subtract(n) {
      calculator.result -= n;

      return calculator.result;
    },

    multiply(n) {
      calculator.result *= n;

      return calculator.result;
    },

    divide(n) {
      calculator.result /= n;

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
