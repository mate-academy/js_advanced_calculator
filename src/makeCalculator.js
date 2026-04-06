'use strict';

/**
 * @return {object}
 */
const makeCalculator = () => {
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

    operate(operation, operand) {
      this.result = operation(this.result, operand);

      return this;
    },
  };

  return calculator;
};

module.exports = makeCalculator;
