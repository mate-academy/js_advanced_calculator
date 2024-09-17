'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  // write code here
  const calculator = {
    result: 0,

    reset() {
      this.result = 0;

      return this;
    },

    operate(method, value) {
      method(value);

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
      calculator.result /= value;
    },
  };

  return calculator;
}

module.exports = makeCalculator;
