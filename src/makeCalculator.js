'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
    add(result, number) {
      return result + number;
    },

    subtract(result, number) {
      return result - number;
    },

    multiply(result, number) {
      return result * number;
    },

    divide(result, number) {
      return result / number;
    },

    reset() {
      this.result = 0;

      return calculator;
    },

    operate(operation, number) {
      calculator.result = operation(calculator.result, number);

      return calculator;
    },

    result: 0,
  };

  return calculator;
}

module.exports = makeCalculator;
