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

    operate(callback, operand) {
      this.result = callback(this.result, operand);

      return this;
    },

    add(a, b) {
      return a + b;
    },

    subtract(a, b) {
      return a - b;
    },

    divide(a, b) {
      return a / b;
    },

    multiply(a, b) {
      return a * b;
    },
  };

  return calculator;
}

module.exports = makeCalculator;
