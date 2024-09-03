'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
    result: 0,

    reset() {
      this.result = 0;

      return this;
    },

    operate(callback, value) {
      callback(value);

      return this;
    },

    add(value) {
      calculator.result += value;
    },

    subtract(value) {
      calculator.result -= value;
    },

    multiply(value) {
      calculator.result *= value;
    },

    divide(value) {
      if (value === 0) {
        return 'cannot be divided by zero';
      } else {
        calculator.result /= value;
      }
    },
  };

  return calculator;
}

module.exports = makeCalculator;
