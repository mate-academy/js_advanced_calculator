'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  let result = 0;

  const calculator = {
    operate(operation, operand) {
      result = operation(result, operand);

      return calculator;
    },

    reset() {
      result = 0;

      return calculator;
    },

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

    get result() {
      return result;
    },
  };

  return calculator;
}

module.exports = makeCalculator;
