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

    add(operand1, operand2) {
      return operand1 + operand2;
    },

    subtract(operand1, operand2) {
      return operand1 - operand2;
    },

    multiply(operand1, operand2) {
      return operand1 * operand2;
    },

    divide(operand1, operand2) {
      return operand2 !== 0 ? operand1 / operand2 : 0;
    },

    operate(callback, number) {
      this.result = callback(this.result, number);

      return this;
    },
  };

  return calculator;
}
module.exports = makeCalculator;
