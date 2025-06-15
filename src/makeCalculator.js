'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  // write code here
  return {
    result: 0,

    reset() {
      this.result = 0;

      return this;
    },

    operate(operation, operand) {
      if (typeof operation !== 'function') {
        return this;
      }

      this.result = operation(this.result, operand);

      return this;
    },

    add(firstOperand, secondOperand) {
      return firstOperand + secondOperand;
    },

    subtract(firstOperand, secondOperand) {
      return firstOperand - secondOperand;
    },

    multiply(firstOperand, secondOperand) {
      return firstOperand * secondOperand;
    },

    divide(firstOperand, secondOperand) {
      return firstOperand / secondOperand;
    },
  };
}

module.exports = makeCalculator;
