'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
    result: 0,

    add(number) {
      return calculator.result + number;
    },

    subtract(number) {
      return calculator.result - number;
    },

    multiply(number) {
      return calculator.result * number;
    },

    divide(number) {
      return calculator.result / number;
    },

    reset() {
      calculator.result = 0;

      return calculator;
    },

    operate(callback, number) {
      calculator.result = callback(number);

      return calculator;
    },
  };

  return calculator;
}

module.exports = makeCalculator;
