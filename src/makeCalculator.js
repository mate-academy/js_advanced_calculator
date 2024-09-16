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
      this.result = 0;

      return this;
    },

    operate(callback, number) {
      this.result = callback(number);

      return this;
    },
  };

  return calculator;
}

module.exports = makeCalculator;
