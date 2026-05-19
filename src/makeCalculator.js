'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
    result: 0,

    add(result, value) {
      return result + value;
    },

    subtract(result, value) {
      return result - value;
    },

    multiply(result, value) {
      return result * value;
    },

    divide(result, value) {
      return result / value;
    },

    reset() {
      calculator.result -= calculator.result;

      return calculator;
    },

    operate(operation, value) {
      calculator.result = operation(calculator.result, value);

      return calculator;
    },
  };

  return calculator;
}

module.exports = makeCalculator;
