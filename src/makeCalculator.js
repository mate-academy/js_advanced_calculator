'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
    result: 0,

    add(value) {
      calculator.result += value;

      return calculator.result;
    },

    subtract(value) {
      calculator.result -= value;

      return calculator.result;
    },

    multiply(value) {
      calculator.result *= value;

      return calculator.result;
    },

    divide(value) {
      calculator.result /= value;

      return calculator.result;
    },

    reset() {
      calculator.result = 0;

      return calculator;
    },

    operate(callback, value) {
      calculator.result = callback(value);

      return calculator;
    },
  };

  return calculator;
}

module.exports = makeCalculator;
