'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
    result: 0,

    operate(callback, operand) {
      this.result = callback(operand, this.result);

      return this;
    },

    add(operand, result) {
      return result + operand;
    },

    subtract(operand, result) {
      return result - operand;
    },

    multiply(operand, result) {
      return result * operand;
    },

    divide(operand, result) {
      return result / operand;
    },

    reset() {
      this.result = 0;

      return this;
    },
  };

  return calculator;
}

module.exports = makeCalculator;
