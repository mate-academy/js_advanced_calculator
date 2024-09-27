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

    divide(operand1, operand2) {
      if (operand1 === 0) {
        return;
      }

      return operand1 / operand2;
    },

    multiply(operand1, operand2) {
      return operand1 * operand2;
    },

    operate(operator, operand2) {
      this.result = operator(this.result, operand2);

      return this;
    },
  };

  return calculator;
}

module.exports = makeCalculator;
