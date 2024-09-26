'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  // write code here
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

    operate(callback, number) {
      this.result = callback(number);

      return calculator;
    },
  };

  return calculator;
}

module.exports = makeCalculator;
