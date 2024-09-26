'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
    result: 0,

    add(value = 0) {
      calculator.result += value;
    },

    subtract(value = 0) {
      calculator.result -= value;
    },

    multiply(value = 1) {
      calculator.result *= value;
    },

    divide(value = 1) {
      calculator.result /= value;
    },

    reset() {
      calculator.result = 0;

      return this;
    },

    operate(callback, value) {
      callback(value);

      return this;
    },
  };

  return calculator;
}

module.exports = makeCalculator;
