'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
    result: 0,

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

    reset() {
      this.result = 0;

      return this;
    },

    operate(operation, value) {
      this.result = operation(this.result, value);

      return this;
    },
  };

  return calculator;
}

module.exports = makeCalculator;
