'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
    result: 0,

    add(FirstOperand, SecondOperand) {
      return FirstOperand + SecondOperand;
    },
    subtract(FirstOperand, SecondOperand) {
      return FirstOperand - SecondOperand;
    },
    divide(FirstOperand, SecondOperand) {
      return FirstOperand / SecondOperand;
    },
    multiply(FirstOperand, SecondOperand) {
      return FirstOperand * SecondOperand;
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
