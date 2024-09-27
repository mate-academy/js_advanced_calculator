'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculatorObj = {
    result: 0,
    reset() {
      this.result = 0;

      return this;
    },
    operate(operation, operand) {
      this.result = operation.call(this, operand);

      return this;
    },
    add(operand) {
      return this.result + operand;
    },
    subtract(operand) {
      return this.result - operand;
    },
    divide(operand) {
      return this.result / operand;
    },
    multiply(operand) {
      return this.result * operand;
    },
  };

  return calculatorObj;
}

module.exports = makeCalculator;
