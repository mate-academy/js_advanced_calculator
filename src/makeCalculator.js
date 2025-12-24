'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  let result = 0;

  const calculator = {
    result,

    add(a, b) {
      return a + b;
    },

    subtract(a, b) {
      return a - b;
    },

    multiply(a, b) {
      return a * b;
    },

    divide(a, b) {
      return a / b;
    },

    operate(operation, number) {
      result = operation(result, number);
      calculator.result = result;

      return calculator;
    },

    reset() {
      result = 0;
      calculator.result = result;

      return calculator;
    },
  };

  return calculator;
}

module.exports = makeCalculator;
