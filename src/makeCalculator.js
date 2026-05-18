'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
    result: 0,

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
      calculator.result = 0;

      return calculator;
    },

    operate(callback, number) {
      calculator.result = callback(calculator.result, number);

      return calculator;
    },
  };

  return calculator;
}

module.exports = makeCalculator;
