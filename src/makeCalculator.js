'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
    result: 0,

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
      return operand1 / operand2;
    },

    reset() {
      this.result = 0;

      return this;
    },

    operate(operator, number) {
      this.result = operator(this.result, number);

      return this;
    },
  };

  return calculator;
}

module.exports = makeCalculator;
