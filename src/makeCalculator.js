'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
    result: 0,

    operate(callback, number) {
      callback(number);

      return this;
    },

    reset() {
      calculator.result = 0;

      return this;
    },

    add(value) {
      calculator.result += value;

      return this;
    },

    subtract(value) {
      calculator.result -= value;

      return this;
    },

    multiply(value) {
      calculator.result *= value;

      return this;
    },

    divide(value) {
      calculator.result /= value;

      return this;
    },
  };

  return calculator;
}

module.exports = makeCalculator;
