'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
    result: 0,

    operate(operator, number) {
      this.result = operator(this.result, number);

      return this;
    },

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
      if (operand2 === 0) {
        return 0;
      }

      return operand1 / operand2;
    },
  };

  return calculator;
}

module.exports = makeCalculator;
