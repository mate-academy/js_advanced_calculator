'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  return {
    result: 0,

    reset() {
      this.result = 0;

      return this.result;
    },

    operate(operation, operand) {
      this.result = operation(operand);

      return this.result;
    },

    add(operand) {
      return this.result + operand;
    },

    subtract(operand) {
      return this.result - operand;
    },

    multiply(operand) {
      return this.result * operand;
    },

    divide(operand) {
      return this.result / operand;
    },
  };
}

module.exports = makeCalculator;
